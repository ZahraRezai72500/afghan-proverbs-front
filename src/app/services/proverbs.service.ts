import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProverbsService {
private baseURL = 'https://afghan-proverbs-backend-b3ln.onrender.com/api'

  constructor(private http: HttpClient) {

   }

   getRandomProverb() {
    return this.http.get<any>(`${this.baseURL}/proverbs/random`)
   }
}
