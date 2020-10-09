import { Component, OnInit } from '@angular/core';
import { ParticlesConfig } from 'src/app/shared/particles/particles-config';

declare let particlesJS: any; 

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    particlesJS('particles-js', ParticlesConfig, function() {});
  }

}
