import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GigsService {
  gigs = ["gig1", "gig2", "gig3"]

  constructor() { }

  getGigs(){
    return this.gigs
  }
}
