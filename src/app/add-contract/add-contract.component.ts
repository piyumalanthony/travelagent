import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ContractService } from '../contract.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-add-contract',
  templateUrl: './add-contract.component.html',
  styleUrls: ['./add-contract.component.css']
})
export class AddContractComponent implements OnInit {

  nestedForm: FormGroup;
  _url='localhost:8080/api/upload/addcontract';
  constructor(private fb: FormBuilder, private contractServie: ContractService, private http: HttpClient) { }

  ngOnInit() {
    this.nestedForm=this.fb.group({
      name: [null,Validators.required],
      location: [null,Validators.required],
      s_date: [null,Validators.required],
      e_date: [null,Validators.required],
      markup: [null,Validators.required],
      room_type: this.fb.array([this.addRoomTypeGroup()])
    });
  }

  addRoomTypeGroup(){
    return this.fb.group({
        room_type_name: [null , Validators.required],
        price: [null , Validators.required],
        no_of_rooms:[null , Validators.required],
        no_of_adults: [null , Validators.required]
    });
  }

  get name(){
    return this.nestedForm.controls.name;
  }

  get loaction(){
    return this.nestedForm.controls.loaction;
  }

  get roomTypeArray(){
    return <FormArray>this.nestedForm.get('room_type')
  }

  get s_date(){
    return this.nestedForm.controls.s_date;
  }

  get e_date(){
    return this.nestedForm.controls.e_date;
  }
  

  addRoomType(){
    this.roomTypeArray.push(this.addRoomTypeGroup());
  }
  removeRoomType(index){
    
      this.roomTypeArray.removeAt(index);
      console.log(index);
    
    
  }

  submitHandler(){
    //console.log(this.nestedForm.value);
    this.contractServie.addNewContract(this.nestedForm.value).subscribe(res=>{
      console.log("New Contract Created!!!")
    })
  }

}
