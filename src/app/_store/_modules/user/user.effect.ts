import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { StoreUserAction } from './user.action';
import { UserService } from './user.service';


@Injectable()
export class StoreUserEffect {

  constructor(
    private actions$: Actions,
    private userService: UserService,
  ) { }


  getUsersEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StoreUserAction.loadUsersEffect),
      map(action => action['payload']),
      catchError(error => error),
      exhaustMap(payload => this.userService.getUsers(payload)),
      map(users => StoreUserAction.setUsers({ payload: users }))
    ),
  );

  getUserDetailEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StoreUserAction.loadUserDetailEffect),
      map(action => action['payload']),
      catchError(error => error),
      exhaustMap(payload => this.userService.getUserDetail(payload)),
      map(userDetail => StoreUserAction.setUserDetail({ payload: userDetail }))
    ),
  );


}
