import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { $ } from 'protractor';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { getUserAccounts } from 'src/app/store/user/user.actions';
import { UserState } from 'src/app/store/user/user.state';

@Component({
  selector: 'app-account-summary',
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.scss']
})
export class AccountSummaryComponent implements OnInit {


  @Select(UserState.getUserData) $userData : Observable<User>;

  suscription: Subscription;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.suscription = this.$userData.subscribe(
      (user) => {
        if(user && user.id) this.store.dispatch(new getUserAccounts(user.id));
    });
  }

  
  ngOnDestroy() {
    this.suscription.unsubscribe();
   }

}
