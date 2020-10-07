import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { User } from 'src/app/models/user.model';
import { getUser } from './user.actions';

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
}
