import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { User } from '@cpas/core-data';

import { UsersActions, UsersActionTypes } from './users.actions';

/**
 * Interface to the part of the Store containing Userstate
 * and other information related to UsersData.
 */
export interface UsersState extends EntityState<User> {
  selectedUserId: string | null;
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>();
export const initialState: UsersState = adapter.getInitialState({
  // additional entity state properties
  selectedUserId: null
});

export function usersReducer(
  state = initialState,
  action: UsersActions
): UsersState {
  switch (action.type) {
    case UsersActionTypes.UserSelected: {
      return Object.assign({}, state, { selectedUserId: action.payload });
    }

    case UsersActionTypes.UsersLoaded: {
      return adapter.addAll(action.payload, state);
    }

    case UsersActionTypes.UserAdded: {
      return adapter.addOne(action.payload, state);
    }

    case UsersActionTypes.UserUpdated: {
      return adapter.upsertOne(action.payload, state);
    }

    case UsersActionTypes.UserDeleted: {
      return adapter.removeOne(action.payload.id, state);
    }

    default:
      return state;
  }
}

export const getSelectedUserId = (state: UsersState) => state.selectedUserId;

// get the selectors
const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors();

// select the array of project ids
export const selectUserIds = selectIds;

// select the dictionary of project entities
export const selectUserEntities = selectEntities;

// select the array of projects
export const selectAllUsers = selectAll;

// select the total project count
export const selectUserTotal = selectTotal;
