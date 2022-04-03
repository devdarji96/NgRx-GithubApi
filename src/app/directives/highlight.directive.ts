import { Directive, ElementRef } from '@angular/core';
import { UserDetailReponse, UserListState } from '../_store/_modules/user/user.interface';
import { Observable } from 'rxjs';
import { StoreUserSelector } from '../_store/_modules/user';
import { Store } from '@ngrx/store';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {
  userDetail$: Observable<UserDetailReponse>;

  constructor(private _elementRef: ElementRef,
    private store: Store<UserListState>
  ) {

    this.userDetail$ = this.store.select(StoreUserSelector.userDetail);
    this.userDetail$.subscribe((userDetail) => {
      if (userDetail?.public_repos > 2) {
        this._elementRef.nativeElement.style.color = 'red';
      }
    });
  }

}


