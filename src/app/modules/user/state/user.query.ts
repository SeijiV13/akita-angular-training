import { UserState, UserStore } from './user.store';
import { QueryEntity } from '@datorama/akita';
import { User } from './user.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserQuery extends QueryEntity<UserState, User> {
    constructor(store: UserStore) {
      super(store)
    }

    selectAreUsersLoaded$ = this.select(state => {
      return state.areUsersListLoaded;
    });

    selectSelectedUser$ = this.select(state => {
      return state.selectedUser;
    });


}
