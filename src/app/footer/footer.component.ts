import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  /** Infinite grid: cursor position for the radial-mask reveal */
  mouseX = -9999;
  mouseY = -9999;
  get radialMask(): string {
    return `radial-gradient(300px circle at ${this.mouseX}px ${this.mouseY}px, black, transparent)`;
  }

  onMouseMove(event: MouseEvent): void {
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    this.mouseX = event.clientX - rect.left;
    this.mouseY = event.clientY - rect.top;
  }

}
