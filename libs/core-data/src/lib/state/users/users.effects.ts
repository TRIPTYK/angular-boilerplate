import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';

import { User } from '../../users/user';
import { UsersService } from '../../users/users.service';

import {
  AddUser,
  DeleteUser,
  UserAdded,
  UserDeleted,
  UsersActionTypes,
  UsersLoaded,
  UserUpdated,
  LoadUsers,
  UpdateUser
} from './users.actions';
import { UsersState } from './users.reducer';

@Injectable({ providedIn: 'root' })
export class ProjectsEffects {
  @Effect() effect$ = this.actions$.pipe(ofType(UsersActionTypes.UsersAction));

  @Effect()
  loadUsers$ = this.dataPersistence.fetch(UsersActionTypes.LoadUsers, {
    run: (action: LoadUsers, state: UsersState) => {
      return this.UsersService.all().pipe(
        map((res: User[]) => new UsersLoaded(res))
      );
    },

    onError: (action: LoadUsers, error) => {
      console.error('Error', error);
    }
  });

  @Effect()
  addUser$ = this.dataPersistence.pessimisticUpdate(UsersActionTypes.AddUser, {
    run: (action: AddUser, state: UsersState) => {
      return this.UsersService.create(action.payload).pipe(
        map((res: User) => new UserAdded(res))
      );
    },

    onError: (action: AddUser, error) => {
      console.error('Error', error);
    }
  });

  @Effect()
  updateUser$ = this.dataPersistence.pessimisticUpdate(
    UsersActionTypes.UpdateUser,
    {
      run: (action: UpdateUser, state: UsersState) => {
        return this.UsersService.update(action.payload).pipe(
          map((res: User) => new UserUpdated(res))
        );
      },

      onError: (action: UpdateUser, error) => {
        console.error('Error', error);
      }
    }
  );

  @Effect()
  deleteUser$ = this.dataPersistence.pessimisticUpdate(
    UsersActionTypes.DeleteUser,
    {
      run: (action: DeleteUser, state: UsersState) => {
        return this.UsersService.delete(action.payload).pipe(
          map(_ => new UserDeleted(action.payload))
        );
      },

      onError: (action: DeleteUser, error) => {
        console.error('Error', error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<UsersState>,
    private UsersService: UsersService
  ) {}
}
