import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.searchForm= this.fb.group({
      checkInDate: [null, Validators.required],
      noOfNights:[null, Validators.required],
      location:[null, Validators.required],
      room_details: this.fb.array([this.addRoomDetailsGroup()])

    });
  }
  searchHandler(){
    console.log(this.searchForm.value);
  }

  addRoomDetailsGroup(){
    return this.fb.group({
        noOfRooms:[null , Validators.required],
        noOfAdults: [null , Validators.required]
    });
  }

  get roomDetailsArray(){
    return <FormArray>this.searchForm.get('room_details');
  }


  addRoomDetails(){
    this.roomDetailsArray.push(this.addRoomDetailsGroup());
  }
  removeRoomDetails(index){
    
      this.roomDetailsArray.removeAt(index);
      console.log(index);
    
    
  }

  submitHandler(){
    console.log(this.searchForm.value);
    
  }





}
