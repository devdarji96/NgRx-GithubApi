import { createAction, props } from '@ngrx/store';

export namespace StoreUserAction {
  export enum ActionTypes {
    SET_USERS = 'SET_USERS',
    SET_USERNAME = 'SET_USERNAME',
    USER_DETAIL = 'USER_DETAIL',
    LOAD_USERS = 'LOAD_USERS',
  }

  // Actions Reducer

  export const setUsers = createAction(ActionTypes.SET_USERS, props<{ payload: any }>());
  export const setUserName = createAction(ActionTypes.SET_USERNAME, props<{ payload: any }>());
  export const setUserDetail = createAction(ActionTypes.USER_DETAIL, props<{ payload: any }>());


  // Actions Effect

  export const loadUsersEffect = createAction(ActionTypes.LOAD_USERS, props<{ payload: any }>());

  export const loadUserDetailEffect = createAction(ActionTypes.USER_DETAIL, props<{ payload: any }>());

  export const loadMoreUsersEffect = createAction(ActionTypes.LOAD_USERS, props<{ payload: any }>());

}
