import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Transaction } from '../models/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private httpClient: HttpClient) { }

  getAllTransactions(body){
    return this.httpClient.post<Transaction[]>(`${environment.apiUrlRoot}/transactions`,body);
  }
}
