import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Anime } from './anime';
@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  apiUrl: string = environment.baseUrl

constructor(private http: HttpClient) { }
getAnimes(): Observable<Anime[]>{
    return this.http.get<Anime[]>(this.apiUrl)
}

}
