import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { ResponseApi, User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {

  }

  getUsers(search: string): Observable<ResponseApi>{ 
    return this.http.get<ResponseApi>(`${this.baseUrl}search/users?q=${search}`);  
  }
}
