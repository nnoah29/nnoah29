import { Component, AfterViewInit, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { inject } from '@vercel/analytics';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  ngOnInit() {
    inject();
  }

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
