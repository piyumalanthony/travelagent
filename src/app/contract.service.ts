import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  _url='localhost:8080/api/upload/addcontract';
  constructor(private http: HttpClient) { }

  public addNewContract(newContract: FormGroup){
    return this.http.post('http://localhost:8080/api/upload/addcontract',newContract);
  }


  
}
