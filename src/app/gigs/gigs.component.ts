import { Component, OnInit } from '@angular/core';
import { GigsService } from '../gigs.service';

@Component({
  selector: 'app-gigs',
  templateUrl: './gigs.component.html',
  styleUrls: ['./gigs.component.css']
})

export class GigsComponent implements OnInit {

  title = "List of Gigs Attended";
  gigs: { id: number; name: string; }[] = [];
  colSpan: number = 0;
  isActive = false;
  search = "";
  titleCaseTest: any;
  gigsService = new GigsService;

  constructor() {
    
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

  onAdd(){
    this.gigs.push({ id: 4, name: "gig4"});
  }

  onRemove(gig: { id: number; name: string; }){
    let index = this.gigs.indexOf(gig);
    this.gigs.splice(index, 1);
  }

  loadGigs(service: GigsService){
    this.gigs = service.getGigs();
    this.colSpan = 2;
  }
 /* Not nessesary unless experincing performance issues rendering lists dynamically
 add: trackBy: trackCourse into *ngFor in component when using
  trackCourse(index: any, gig: { id: number; name: string; }){
    return gig ? gig.id : undefined;
  }
  */

  tempGig = {
    artist: "The Stoned Immaculate",
    venue: "Mcullis?",
    date: new Date(2022, 7, 15),
    price: 5.00,
    rating: 0.0
  }
}
