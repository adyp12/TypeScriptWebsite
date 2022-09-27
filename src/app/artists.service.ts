import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  artists = ["Pandas", "Pinc Wafer", "Alex Lahey"];

  constructor() { }

  getArtists(){
    return this.artists;
  }
}
