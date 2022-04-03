import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UserState } from './user.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  getUsers(payload: any) {
    const params = this.onSetHttpParams(payload);
    return this.http.get<UserState[]>(`${environment.baseUrl}/users`, { params: params });
  }

  getUserDetail(payload: any) {
    return this.http.get<UserState[]>(`${environment.baseUrl}/users/${payload}`);
  }

  private onSetHttpParams(commonRequest: any): HttpParams {
    try {
      let params = new HttpParams();
      for (const key in commonRequest) {
        if (Object.prototype.hasOwnProperty.call(commonRequest, key)) {
          const element = commonRequest[key];
          if (element) {
            params = params.append(key, element);
          }
        }
      }
      return params;
    } catch (error) {
      return null;
    }
  }
}
