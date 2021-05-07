import { UserQuery } from 'src/app/modules/user/state/user.query';
import { EntityState, StoreConfig, EntityStore, ID } from '@datorama/akita';
import { User } from './user.model';
import { Injectable } from '@angular/core';


export interface UserState extends EntityState<User> {
  areUsersListLoaded: boolean;
  selectedUser: User;
  firstUser: User;
}

export function createInitialState(): UserState {
  return {
    areUsersListLoaded: false,
    selectedUser: null,
    firstUser: null
  }
}

@Injectable({ providedIn: 'root'})
@StoreConfig({name: 'users'})
export class UserStore extends EntityStore<UserState, User> {
   constructor() {
     super(createInitialState());
   }

   addUser(user: User) {
     this.add([user]);
   }


   loadUsers(users: User[], loaded: boolean) {
     //Action 1
     this.set(users);
     //Action 2
     this.update(state => ({
       ...state,
       areUsersListLoaded: loaded
     }));
   }
}
