import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StoreUserState } from './user.interface';

export const storeState = createFeatureSelector<StoreUserState>('storeUser');

export namespace StoreUserSelector {
  export const users = createSelector(storeState, (state) => state.users);
  export const userName = createSelector(storeState, (state) => state.userName);
  export const userDetail = createSelector(storeState, (state) => state.userDetail);
}
