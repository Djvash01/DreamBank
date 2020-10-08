import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { AccountService } from 'src/app/services/account.service';
import { GetUserAccounts } from 'src/app/store/user/user.actions';
import { UserState } from 'src/app/store/user/user.state';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Select(UserState.getUserData) $userData : Observable<User>;

  suscription: Subscription;

  constructor(private store: Store, private accountService:AccountService) { }

  ngOnInit(): void {
    this.suscription = this.$userData.subscribe(
      (user) => {
        if(user && user.id) this.accountService.getAccounts(user.id)
        .subscribe(res => this.store.dispatch(new GetUserAccounts(res)));
    });
  }

  ngOnDestroy() {
    this.suscription.unsubscribe();
   }

}
