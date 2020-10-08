import { Account } from 'src/app/models/account.model';
import { Transaction } from 'src/app/models/transaction.model';
import { User } from 'src/app/models/user.model';


export class GetUser {
  static readonly type = '[User] get user';
  constructor(public payload: User) { }
}

export class GetUserAccounts {
  static readonly type = '[User] get accounts';
  constructor(public accounts: Account[]) { }
}

export class GetTransactions {
  static readonly type = '[User] get transactions';
  constructor(public idAccount:string, public transactions: Transaction[]) { }
}
