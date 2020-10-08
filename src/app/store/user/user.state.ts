import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { User } from 'src/app/models/user.model';
import { AccountService } from 'src/app/services/account.service';
import { GetTransactions, GetUser, GetUserAccounts } from './user.actions';
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

  constructor(){}

  @Selector()
  static getUserData(state: UserStateModel){
    return state.user;
  }

  @Action(GetUser)
  getUser({getState,setState}:StateContext<UserStateModel>, { payload }:GetUser){
    const state = getState();
    setState({
      ...state,
      user: payload
    });
  }

  @Action(GetUserAccounts)
  @ImmutableContext()
  getUserAccounts({setState}:StateContext<UserStateModel>, { accounts }:GetUserAccounts){
    setState((state:UserStateModel) => {
      state.user.accounts = accounts;
      return state;
    })
  }

  @Action(GetTransactions)
  @ImmutableContext()
  getTransactions({setState}:StateContext<UserStateModel>, { idAccount ,transactions }:GetTransactions){
    setState((state:UserStateModel) => {
      const indexAccount= state.user.accounts.findIndex(account => account.id === idAccount);
      state.user.accounts[indexAccount].transactions = transactions 
      return state;
    })
  }
}
