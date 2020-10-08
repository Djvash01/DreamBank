import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  requestNewProduct(body){
    return this.httpClient.post<any>(`${environment.apiUrlRoot}/transactions`,body);
  }
}
