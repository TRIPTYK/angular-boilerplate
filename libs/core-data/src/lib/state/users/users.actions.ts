import { Action } from '@ngrx/store';
import { User } from '@cpas/core-data';

export enum UsersActionTypes {
  UsersAction = '[Users] Action',
  UserSelected = '[Users] Selected',
  LoadUsers = '[Users] Load Data',
  UsersLoaded = '[Users] Data Loaded',
  AddUser = '[Users] Add Data',
  UserAdded = '[Users] Data Added',
  UpdateUser = '[Users] Update Data',
  UserUpdated = '[Users] Data Updated',
  DeleteUser = '[Users] Delete Data',
  UserDeleted = '[Users] Data Deleted'
}

export class Users implements Action {
  readonly type = UsersActionTypes.UsersAction;
}

export class UserSelected implements Action {
  readonly type = UsersActionTypes.UserSelected;
  constructor(public payload) {}
}

export class LoadUsers implements Action {
  readonly type = UsersActionTypes.LoadUsers;
  constructor() {}
}

export class UsersLoaded implements Action {
  readonly type = UsersActionTypes.UsersLoaded;
  constructor(public payload: User[]) {}
}

export class AddUser implements Action {
  readonly type = UsersActionTypes.AddUser;
  constructor(public payload: User) {}
}

export class UserAdded implements Action {
  readonly type = UsersActionTypes.UserAdded;
  constructor(public payload: User) {}
}

export class UpdateUser implements Action {
  readonly type = UsersActionTypes.UpdateUser;
  constructor(public payload: User) {}
}

export class UserUpdated implements Action {
  readonly type = UsersActionTypes.UserUpdated;
  constructor(public payload: User) {}
}

export class DeleteUser implements Action {
  readonly type = UsersActionTypes.DeleteUser;
  constructor(public payload: User) {}
}

export class UserDeleted implements Action {
  readonly type = UsersActionTypes.UserDeleted;
  constructor(public payload: User) {}
}

export type UsersActions =
  | Users
  | UserSelected
  | LoadUsers
  | UsersLoaded
  | AddUser
  | UserAdded
  | UpdateUser
  | UserUpdated
  | DeleteUser
  | UserDeleted;
