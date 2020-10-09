import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  requestNewProduct(body){
    this.httpClient.post<any>(`${environment.apiUrlRoot}/newProduct`,body).subscribe(res =>{
      this.router.navigate(['/dashboard/products/success']);
    });
  }
}
