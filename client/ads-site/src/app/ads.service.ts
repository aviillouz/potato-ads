import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Ad } from './ad';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AdsService {

  constructor(private http: HttpClient) { }

  getAds(): Observable<Ad[]> {
    return this.http.get<Ad[]>("localhost:3000/ads");

    // return of([
    //   { id: 1, role: "a", description: "b", createdAt: new Date(), updatedAt: new Date() },
    //   { id: 2, role: "c", description: "d", createdAt: new Date(), updatedAt: new Date() },
    //   { id: 3, role: "e", description: "f", createdAt: new Date(), updatedAt: new Date() }
    // ]);
  }
}
