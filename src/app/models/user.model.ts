import { Account } from './account.model';

export interface User {
    id:string;
    name:string;
    lastEntry:Date;
    accounts: Account[];
}
