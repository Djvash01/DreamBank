import { Transaction } from './transaction.model';

export interface Account {
    id:string;
    type:string;
    name:string;
    status:string;
    currency:string;
    balance:number;
    transactions: Transaction[];
}
