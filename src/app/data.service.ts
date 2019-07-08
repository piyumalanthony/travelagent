import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { IHotel } from './hotel';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient ) { }

  getHotels():Observable<IHotel[]> {
    return this.http.get<IHotel[]>('http://localhost:8080/api/hotels/all')
  }
}
