import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup;
  public result:Object;
  constructor(private fb:FormBuilder,private http: HttpClient,private searchService:SearchService) { }

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
    this.searchService.searchReservation(this.searchForm.value).subscribe(res=>{
      console.log("submitted values!!!")
      this.result=res;
      console.log(this.result);
    })
    
  }





}
