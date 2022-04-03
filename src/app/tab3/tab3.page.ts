import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { StoreUserAction, StoreUserSelector } from '../_store/_modules/user';
import { UserListState, UserDetailReponse } from '../_store/_modules/user/user.interface';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  userDetail$: Observable<UserDetailReponse>;
  searchTerm: string;
  defaultImage = String('https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y');

  constructor(
    private store: Store<UserListState>,
    private iab: InAppBrowser
  ) { }

  ionViewWillEnter(): void {
    this.searchTerm = '';
  }

  ngOnInit(): void {
    this.onLoadUserDetail()
  }

  private onLoadUserDetail(): void {
    this.userDetail$ = this.store.select(StoreUserSelector.userDetail);
    this.userDetail$.subscribe((res) => {
      if (res?.login) {
        this.searchTerm = res.login;
      }
    });
  }


  findUser(): void {
    if (this.searchTerm && this.searchTerm.trim()) {
      this.store.dispatch(StoreUserAction.loadUserDetailEffect({ payload: this.searchTerm }));
    }
  }

  openWebsite(url: string): void {
    if (!url) { return; }
    this.iab.create(url, '_blank');
  }

}
