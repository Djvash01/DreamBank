import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { User } from 'src/app/models/user.model';
import { getUser, getUserAccounts } from './user.actions';

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
  getUserAccounts({getState,patchState}:StateContext<UserStateModel>, { payload }:getUserAccounts){
    const state = getState();
    let user = state;
    user.user.accounts = payload;
    patchState({
        user: user.user
    });
  }
}
