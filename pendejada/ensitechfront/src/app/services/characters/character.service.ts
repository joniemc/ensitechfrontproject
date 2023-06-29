import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private pathBase = '/api';

  constructor(private http: HttpClient) { }

  getAllCharacters() {
    const url = `${this.pathBase}/characters/v1/get/all`;
    const bearerToken = 'Bearer '+ localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': bearerToken
    });

    return this.http.get(url,{headers});
  }

  getCharacterById(characterId: number){
    const url = `${this.pathBase}/characters/v1/get/byid/${characterId}`;
    const bearerToken = 'Bearer '+ localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': bearerToken
    });

    return this.http.get(url,{headers});
  }

}
