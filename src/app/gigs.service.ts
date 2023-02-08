import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GigsService {
  gigs = [
    { id: 1, name: "gig1" },
    { id: 2, name: "gig2" },
    { id: 3, name: "gig3" }
  ]

  constructor() { }

  getGigs(){
    return this.gigs
  }
}
