import { UserState, UserDetailReponse } from './user.interface';
import { createReducer, on, Action } from '@ngrx/store'
import { StoreUserAction } from './user.action';


export namespace StoreUserReducer {
  const storeUser: {
    users: UserState[];
    userName: string;
    userDetail: UserDetailReponse;
  } = {
    users: [], userName: '', userDetail: null,
  }
  const _setUsers = (state: any, action: Action) => ({ ...state, users: action['payload'] });
  const _setUserName = (state: any, action: Action) => ({ ...state, userName: action['payload'] });
  const _setUserDetail = (state: any, action: Action) => ({ ...state, userDetail: action['payload'] });

  const _userReduces = createReducer(storeUser,
    on(StoreUserAction.setUsers, _setUsers),
    on(StoreUserAction.setUserName, _setUserName),
    on(StoreUserAction.setUserDetail, _setUserDetail),
  )
  export function reducer(state: any, action: Action) {
    return _userReduces(state, action)
  }
}
