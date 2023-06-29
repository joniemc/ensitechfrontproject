import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoggService {
  private pathBase = '/api';

  constructor(private http: HttpClient) { }

  getAllLoggs(){
    const url = `${this.pathBase}/loggs/v1/get/all`;
    const bearerToken = 'Bearer '+ localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': bearerToken
    });
    return this.http.get(url,{headers});
  }

}
