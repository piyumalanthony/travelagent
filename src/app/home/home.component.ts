import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public hotels=[];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getHotels().subscribe(data => {
      this.hotels = data
      console.log(this.hotels);
    }
  );
}
  

 

}
