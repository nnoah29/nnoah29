import {
  AfterViewInit,
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { ParallaxService } from '../../shared/services/parallax.service';
import * as THREE from 'three';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  items: string[] = [
    'Digital Strategy',
    'Design System',
    'Brand Strategy',
    'Website Design',
    'SEO Optimization',
    'Content Strategy',
  ];

  @ViewChild('heroTitle', { static: false }) heroTitle!: ElementRef<HTMLElement>;
  @ViewChild('heroLeft', { static: false }) heroLeft!: ElementRef<HTMLElement>;
  @ViewChild('heroRight', { static: false }) heroRight!: ElementRef<HTMLElement>;
  @ViewChild('heroImg', { static: false }) heroImg!: ElementRef<HTMLElement>;
  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef<HTMLElement>;
  @ViewChild('threeCanvas', { static: false }) threeCanvas!: ElementRef<HTMLCanvasElement>;

  private sub!: Subscription;

  // Three.js
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private animationId!: number;
  private objects: THREE.Mesh[] = [];
  private mouseX = 0;
  private mouseY = 0;
  private targetX = 0;
  private targetY = 0;
  private boundMouseMove!: (e: MouseEvent) => void;

  constructor(private parallax: ParallaxService, private zone: NgZone) { }

  ngAfterViewInit(): void {
    this.sub = this.parallax.getScroll$().subscribe((scrollY) => {
      this.zone.runOutsideAngular(() => this.applyParallax(scrollY));
    });

    this.zone.runOutsideAngular(() => this.initThree());
  }

  // ─── Parallax ───────────────────────────────────────────────────────────────

  private applyParallax(scrollY: number): void {
    this.applyTranslate(this.heroTitle, scrollY, 0.12);
    this.applyTranslate(this.heroLeft, scrollY, 0.07);
    this.applyTranslate(this.heroRight, scrollY, 0.09);
    this.applyTranslate(this.heroImg, scrollY, 0.18);
    this.applyTranslate(this.scrollContainer, scrollY, 0.05);
  }

  private applyTranslate(
    ref: ElementRef<HTMLElement> | undefined,
    scrollY: number,
    speed: number
  ): void {
    if (!ref?.nativeElement) return;
    const el = ref.nativeElement;
    const top = el.getBoundingClientRect().top + scrollY - window.innerHeight / 2;
    const offset = this.parallax.calcOffset(scrollY, top, speed);
    el.style.transform = `translateY(${-offset}px)`;
  }

  // ─── Three.js ───────────────────────────────────────────────────────────────

  private initThree(): void {
    const canvas = this.threeCanvas.nativeElement;
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;

    // Renderer
    this.renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    this.renderer.setSize(w, h);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setClearColor(0x000000, 0);

    // Scene & Camera
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 100);
    this.camera.position.z = 5;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    this.scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1.5, 20);
    pointLight.position.set(3, 4, 5);
    this.scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0x8888ff, 0.8, 15);
    pointLight2.position.set(-3, -2, 3);
    this.scene.add(pointLight2);

    // Create floating 3D objects
    this.createObjects();

    // Mouse tracking
    this.boundMouseMove = (e: MouseEvent) => {
      this.mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      this.mouseY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', this.boundMouseMove);

    // Resize
    window.addEventListener('resize', () => this.onResize());

    // Animate
    this.animate();
  }

  private createObjects(): void {
    const material1 = new THREE.MeshStandardMaterial({
      color: 0x111111,
      roughness: 0.1,
      metalness: 0.9,
    });

    const material2 = new THREE.MeshStandardMaterial({
      color: 0x222222,
      roughness: 0.3,
      metalness: 0.7,
      wireframe: false,
    });

    const material3 = new THREE.MeshStandardMaterial({
      color: 0x000000,
      roughness: 0.05,
      metalness: 1.0,
    });

    const materialWire = new THREE.MeshStandardMaterial({
      color: 0x333333,
      roughness: 0.2,
      metalness: 0.8,
      wireframe: true,
    });

    // Torus (anneau)
    const torusGeo = new THREE.TorusGeometry(0.6, 0.12, 16, 60);
    const torus = new THREE.Mesh(torusGeo, material1);
    torus.position.set(-3.5, 1.2, -1);
    torus.rotation.x = Math.PI / 4;
    this.scene.add(torus);
    this.objects.push(torus);

    // Icosahedron (cristal)
    const icoGeo = new THREE.IcosahedronGeometry(0.55, 0);
    const ico = new THREE.Mesh(icoGeo, material3);
    ico.position.set(3.2, 1.5, -0.5);
    this.scene.add(ico);
    this.objects.push(ico);

    // Torus Knot (forme complexe)
    const knotGeo = new THREE.TorusKnotGeometry(0.4, 0.1, 80, 12);
    const knot = new THREE.Mesh(knotGeo, material2);
    knot.position.set(3.8, -1.5, -1);
    this.scene.add(knot);
    this.objects.push(knot);

    // Octahedron (diamant)
    const octGeo = new THREE.OctahedronGeometry(0.45);
    const oct = new THREE.Mesh(octGeo, material3);
    oct.position.set(-4, -1.2, -0.5);
    this.scene.add(oct);
    this.objects.push(oct);

    // Petite sphère en wireframe
    const sphereGeo = new THREE.SphereGeometry(0.35, 16, 16);
    const sphere = new THREE.Mesh(sphereGeo, materialWire);
    sphere.position.set(1.5, 2.5, -2);
    this.scene.add(sphere);
    this.objects.push(sphere);

    // Cube wireframe
    const boxGeo = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const box = new THREE.Mesh(boxGeo, materialWire);
    box.position.set(-1.8, -2.5, -1.5);
    box.rotation.set(0.3, 0.5, 0.1);
    this.scene.add(box);
    this.objects.push(box);

    // Cone
    const coneGeo = new THREE.ConeGeometry(0.3, 0.7, 6);
    const cone = new THREE.Mesh(coneGeo, material1);
    cone.position.set(0.5, -2.2, -1);
    this.scene.add(cone);
    this.objects.push(cone);
  }

  private animate(): void {
    this.animationId = requestAnimationFrame(() => this.animate());

    const time = Date.now() * 0.001;

    // Smooth mouse lerp
    this.targetX += (this.mouseX - this.targetX) * 0.04;
    this.targetY += (this.mouseY - this.targetY) * 0.04;

    // Camera subtle tilt based on mouse
    this.camera.rotation.y = this.targetX * 0.08;
    this.camera.rotation.x = this.targetY * 0.05;

    // Animate each object
    this.objects.forEach((obj, i) => {
      // Float up/down
      obj.position.y += Math.sin(time * 0.7 + i * 1.3) * 0.002;

      // Rotate
      obj.rotation.x += 0.003 + i * 0.001;
      obj.rotation.y += 0.004 + i * 0.0008;

      // Mouse parallax per object (different depths)
      const depth = 0.08 + i * 0.03;
      obj.position.x += (this.targetX * depth - obj.userData['baseX']) * 0.0 || 0;

      // React to mouse: slight push
      obj.rotation.z = this.targetX * (0.05 + i * 0.01);
    });

    this.renderer.render(this.scene, this.camera);
  }

  private onResize(): void {
    if (!this.threeCanvas) return;
    const canvas = this.threeCanvas.nativeElement;
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
  }

  // ─── Destroy ────────────────────────────────────────────────────────────────

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    cancelAnimationFrame(this.animationId);
    window.removeEventListener('mousemove', this.boundMouseMove);
    this.renderer?.dispose();
  }
}
