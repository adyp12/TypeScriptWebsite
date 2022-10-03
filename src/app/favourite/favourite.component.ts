import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  isFavourite: boolean;

  constructor() {
    this.isFavourite = false;
   }

  ngOnInit(): void {
  }

  onClick(){
    this.isFavourite = !this.isFavourite;
  }
}