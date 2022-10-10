import { Component, OnInit } from '@angular/core';
import { GigsService } from '../gigs.service';

@Component({
  selector: 'app-gigs',
  templateUrl: './gigs.component.html',
  styleUrls: ['./gigs.component.css']
})

export class GigsComponent implements OnInit {

  title = "List of Gigs Attended";
  gigs;
  colSpan;
  isActive = false;
  search = "";
  titleCaseTest: any;

  constructor(service: GigsService) {
    this.gigs = service.getGigs();
    this.colSpan = 2;
  }

  ngOnInit(): void {

  }

  getTitle(){
    return this.title;
  }

  onSave($event: any){
    $event.stopPropagation();
    console.log("Save Test", $event);
  }

  onDivClick(){
    console.log("Div was Clicked")
  }

  onKeyUp(){
    console.log(this.search);
  }

  gig = {
    artist: "The Stoned Immaculate",
    venue: "Mcullis?",
    date: new Date(2022, 7, 15),
    price: 5.00,
    rating: 0.0
  }
}
