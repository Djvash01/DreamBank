import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { Account } from 'src/app/models/account.model';
import { User } from 'src/app/models/user.model';
import { UserState } from 'src/app/store/user/user.state';

@Component({
  selector: 'app-info-toolbar',
  templateUrl: './info-toolbar.component.html',
  styleUrls: ['./info-toolbar.component.scss']
})
export class InfoToolbarComponent implements OnInit {
  
  @Select(UserState.getUserData) $userData : Observable<User>;
  suscription: Subscription;
  private _totalBalance:number;

  constructor() { }

  ngOnInit(): void {
    this.suscription = this.$userData.subscribe(user =>{
      this._totalBalance = user.accounts.reduce((total:number, account:Account)=>{
        return total + account.balance;
      },0);
    });
  }

  get totalBalance(){
    return this._totalBalance;
  }

  
  ngOnDestroy() {
    this.suscription.unsubscribe();
   }

}
