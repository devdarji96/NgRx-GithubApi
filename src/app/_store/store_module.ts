import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { ActionReducerMap, MetaReducer, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { StoreUserReducer } from './_modules/user';
import { StoreUserEffect } from './_modules/user/user.effect';
import { TryState } from './_modules/user/user.interface';


export const reducers: ActionReducerMap<TryState> = {
  storeUser: StoreUserReducer.reducer,
};

export const metaReducers: MetaReducer<TryState>[] = !environment.production ? [] : [];

const CONFIG_STORE_MODULE = {
  metaReducers: [],
  runtimeChecks: {
    strictStateImmutability: true,
    strictActionImmutability: true
  }
}

const CONFIG_STORE_DEV_MODULE = { maxAge: 100, logOnly: environment.production }
const CONFIG_EFFECTS_MODULE = [
  StoreUserEffect,
]

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, CONFIG_STORE_MODULE),
    StoreDevtoolsModule.instrument(CONFIG_STORE_DEV_MODULE),
    EffectsModule.forRoot(CONFIG_EFFECTS_MODULE)
  ],
  exports: [StoreModule, StoreDevtoolsModule, EffectsModule]
})
export class AppStoreModule { }
