import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }
  // getCarouselData(): Observable<any> {
  //   return this.http.get("http://localhost:3000/carosuel")
  // }
  getStuidoImage(): Observable<any> {
    return this.http.get("http://localhost:3000/studio")
  }
  getArtistImage(): Observable<any> {
    return this.http.get("http://localhost:3000/artist")
  }
}
