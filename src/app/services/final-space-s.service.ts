import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../interfaces/character';
import { Location } from '../interfaces/location';
import { Episode } from '../interfaces/episode';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class FinalSpaceService {


  

  constructor(
    private httpClient: HttpClient
  ) { }

  

  getAllCharacters(): Observable<Character[]> {
    return this.httpClient.get<Character[]>(environment.apiUrl + 'character');
  } 

  getCharacterById(id: any): Observable<Character> {
    return this.httpClient.get<Character>(environment.apiUrl + 'character/' + id);
  }

  getAllLocations(): Observable<Location[]> {
    return this.httpClient.get<Location[]>(environment.apiUrl + 'location');
  }

  getAllEpisodes(): Observable<Episode[]> {
    return this.httpClient.get<Episode[]>(environment.apiUrl + 'episode');
  }

}
