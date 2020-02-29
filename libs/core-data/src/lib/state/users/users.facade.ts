import { Injectable } from '@angular/core';
import { ActionsSubject, select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';

import { selectAllUsers, selectCurrentUser } from '..';
import { UsersActionTypes } from './users.actions';
import * as UsersActions from './users.actions';
import { UsersState } from './users.reducer';

@Injectable({
  providedIn: 'root'
})
export class UsersFacade {
  allProjects$ = this.store.pipe(select(selectAllUsers));
  currentUser$ = this.store.pipe(select(selectCurrentUser));

  mutations$ = this.actions$.pipe(
    filter(
      action =>
        action.type === UsersActionTypes.AddUser ||
        action.type === UsersActionTypes.UpdateUser ||
        action.type === UsersActionTypes.DeleteUser
    )
  );

  constructor(
    private store: Store<UsersState>,
    private actions$: ActionsSubject
  ) {}

  selectUser(itemId) {
    this.store.dispatch(new UsersActions.UserSelected(itemId));
  }

  loadUsers() {
    this.store.dispatch(new UsersActions.LoadUsers());
  }

  addUser(item) {
    this.store.dispatch(new UsersActions.AddUser(item));
  }

  updateUser(item) {
    this.store.dispatch(new UsersActions.UpdateUser(item));
  }

  deleteUser(item) {
    this.store.dispatch(new UsersActions.DeleteUser(item));
  }
}
