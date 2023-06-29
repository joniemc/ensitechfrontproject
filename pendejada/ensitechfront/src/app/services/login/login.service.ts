import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private pathBase = '/api';

  constructor(private http: HttpClient) { }

  getAuthToken() {
    const url = `${this.pathBase}/clientmodule/api/v1/login`;

    const body = {
      username: "admin",
      password: "admin"
    };

    this.http.post(url, body, { observe: 'response' }).subscribe((response: any) => {
      const bearerToken = response.headers.get('Authorization'); 
      let token = bearerToken.replace(/Bearer /g,'');
      console.log(token);
      localStorage.setItem('token',token);
    });
  }

}
