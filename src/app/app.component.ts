import { Component, OnInit } from '@angular/core';
import { StoreUserState, UserRequest } from './_store/_modules/user/user.interface';
import { Store } from '@ngrx/store';
import { StoreUserAction } from './_store/_modules/user';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  storeUser: Store<StoreUserState>;
  requestParams: UserRequest = {
    page: 1,
    per_page: 20,
  };

  constructor(
    private store: Store<StoreUserState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(StoreUserAction.loadUsersEffect({ payload: this.requestParams }));
  }
}
