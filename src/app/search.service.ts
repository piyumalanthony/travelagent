import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  public searchReservation(searchForm: FormGroup){
    return this.http.post('http://localhost:8080/api/search',searchForm);
  }
}
