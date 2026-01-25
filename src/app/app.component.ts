import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HomeComponent} from "./home/home.component";

@Component({
  selector: 'app-root',
  imports: [HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  ngAfterViewInit(): void {
    this.loadCustomScript();
  }

  loadCustomScript() {
    const node = document.createElement('script');
    node.src = 'assets/js/script.js';
    node.type = 'text/javascript';
    node.async = true;
    document.body.appendChild(node);
  }

}
