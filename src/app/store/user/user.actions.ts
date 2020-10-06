import { User } from 'src/app/models/user.model';


export class getUser {
  static readonly type = '[User] get user';
  constructor(public payload: User) { }
}
