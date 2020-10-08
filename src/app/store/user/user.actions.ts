import { Account } from 'src/app/models/account.model';
import { User } from 'src/app/models/user.model';


export class getUser {
  static readonly type = '[User] get user';
  constructor(public payload: User) { }
}

export class getUserAccounts {
  static readonly type = '[User] get accounts';
  constructor(public accounts: Account[]) { }
}
