import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Ad } from './ad';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

  constructor() { }

  getAds(): Observable<Ad[]> {
    return of([
      { id: 1, role: "a", description: "b", createdAt: new Date(), updatedAt: new Date() },
      { id: 2, role: "c", description: "d", createdAt: new Date(), updatedAt: new Date() },
      { id: 3, role: "e", description: "f", createdAt: new Date(), updatedAt: new Date() }
    ]);
  }
}
