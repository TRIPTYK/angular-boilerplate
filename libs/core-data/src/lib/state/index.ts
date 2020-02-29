import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import * as fromUsers from './users/users.reducer';

import { User } from '../users/user';

export interface AppState {
  projects: fromUsers.UsersState;
}

export const reducers: ActionReducerMap<AppState> = {
  projects: fromUsers.usersReducer
};

// -------------------------------------------------------------------
// PROJECTS SELECTORS
// -------------------------------------------------------------------
export const selectUsersState = createFeatureSelector<fromUsers.UsersState>(
  'users'
);

export const selectUserIds = createSelector(
  selectUsersState,
  fromUsers.selectUserIds
);
export const selectUserEntities = createSelector(
  selectUsersState,
  fromUsers.selectUserEntities
);
export const selectAllUsers = createSelector(
  selectUsersState,
  fromUsers.selectAllUsers
);
export const selectCurrentUserId = createSelector(
  selectUsersState,
  fromUsers.getSelectedUserId
);

const emptyUser: User = {
  id: null,
  name: '',
  email: '',
  role: 'user',
  isActive: false
};

export const selectCurrentUser = createSelector(
  selectUserEntities,
  selectCurrentUserId,
  (userEntities, userId) => {
    return userId ? userEntities[userId] : emptyUser;
  }
);
