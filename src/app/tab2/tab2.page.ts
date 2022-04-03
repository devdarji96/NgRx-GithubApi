import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { StoreUserAction, StoreUserSelector } from '../_store/_modules/user';
import { UserListState, UserState, UserRequest } from '../_store/_modules/user/user.interface';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  users$: Observable<UserState[]> = null;
  requestParams: UserRequest = {
    page: 0,
    per_page: 20,
  };

  constructor(
    private store: Store<UserListState>,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.onLoadUsers()
  }

  private onLoadUsers(): void {
    this.users$ = this.store.select(StoreUserSelector.users);
  }

  loadMoreUsers(event: any): void {
    const request = { ...this.requestParams };
    request.page++;
    request.per_page += 20;
    this.requestParams.page = request.page;
    this.requestParams.per_page = request.per_page;
    this.store.dispatch(StoreUserAction.loadMoreUsersEffect({ payload: request }));
    event.target.complete();
  }

  openUserProfile(userName: string): void {
    this.store.dispatch(StoreUserAction.loadUserDetailEffect({ payload: userName }));
    this.router.navigate(['/tabs/tab3']);
  }

}
