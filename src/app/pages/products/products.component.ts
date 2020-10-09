import { Component, OnInit } from '@angular/core';

declare let particlesJS: any;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    particlesJS.load('particles-js', 'assets/particles/particles.json', function() {
      console.log('callback - particles-js config loaded');
    });
  }

}
