import { Component, OnInit } from '@angular/core';
import { GigsService } from '../gigs.service';

@Component({
  selector: 'app-gigs',
  templateUrl: './gigs.component.html',
  styleUrls: ['./gigs.component.scss']
})

export class GigsComponent implements OnInit {

  title = "List of Gigs Attended";
  gigs;

  constructor(service: GigsService) {
    this.gigs = service.getGigs();
  }

  ngOnInit(): void {

  }

  getTitle(){
    return this.title;
  }
}
