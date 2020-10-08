import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { Account } from 'src/app/models/account.model';
import { User } from 'src/app/models/user.model';
import { AccountService } from 'src/app/services/account.service';
import { getUserAccounts } from 'src/app/store/user/user.actions';
import { UserState } from 'src/app/store/user/user.state';

@Component({
  selector: 'app-account-summary',
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.scss']
})
export class AccountSummaryComponent implements OnInit {

  displayedColumns: string[] = ['icon','Type', 'AccountName', 'Status', 'Currency', 'Balance'];

  @Select(UserState.getUserData) $userData : Observable<User>;

  suscription: Subscription;

  constructor(private store: Store, private accountService:AccountService) { }

  ngOnInit(): void {
    this.suscription = this.$userData.subscribe(
      (user) => {
        if(user && user.id) this.accountService.getAccounts(user.id)
        .subscribe(res => this.store.dispatch(new getUserAccounts(res)));
    });
  }

  showTransactions(account: Account){
    console.log('dentro de la tabla',account);
    
  }
  
  ngOnDestroy() {
    this.suscription.unsubscribe();
   }

}
