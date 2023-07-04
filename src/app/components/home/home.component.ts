import { Component,AfterViewInit } from '@angular/core';
import Typed from 'typed.js';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit() {
    const options = {
      strings: ['News',
      'Insights',
      'Analysis',
      'Discussions',
      'Perspectives'],
      typeSpeed: 50,
      loop: true
    };

    const typed = new Typed('#typed-element', options);
  }
}
