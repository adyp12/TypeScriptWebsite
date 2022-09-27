import { Component, OnInit } from '@angular/core';
import { ArtistsService } from '../artists.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {

  artists;
  numArtists;

  constructor(service: ArtistsService) {
    this.artists = service.getArtists(); 
    this.numArtists = this.getNumArtists(); 
  }

  ngOnInit(): void {
  }

  getTitle(){
    return this.numArtists + " Artists";
  }

  getNumArtists(){
    return this.artists.length;
  }
}
