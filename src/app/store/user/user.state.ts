import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { User } from 'src/app/models/user.model';
import { AccountService } from 'src/app/services/account.service';
import { getUser, getUserAccounts } from './user.actions';
import { tap } from 'rxjs/operators';
import { ImmutableContext, ImmutableSelector } from '@ngxs-labs/immer-adapter';

export class UserStateModel {
  public user: User;
}

const defaults = {
  user: null
};

@State<UserStateModel>({
  name: 'user',
  defaults
})
@Injectable()
export class UserState {

  constructor(private accountService:AccountService){}

  @Selector()
  static getUserData(state: UserStateModel){
    return state.user;
  }

  @Action(getUser)
  getUser({getState,setState}:StateContext<UserStateModel>, { payload }:getUser){
    const state = getState();
    setState({
      ...state,
      user: payload
    });
  }

  @Action(getUserAccounts)
  @ImmutableContext()
  getUserAccounts({setState}:StateContext<UserStateModel>, { id }:getUserAccounts){
    this.accountService.getAccounts(id).pipe(
      tap((res) => {
        setState((state:UserStateModel) => {
          state.user.accounts = res;
          return state;
        })
      })
    );
  }
}
