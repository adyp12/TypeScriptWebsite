import { Component } from '@angular/core';
import { FavouriteChangedEventArgs } from './favourite/favourite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  viewMode = 'unknown';

  gigs = [
    { id: 1, name: 'Gig1' },
    { id: 2, name: 'Gig2' },
    { id: 3, name: 'Gig3' }
  ];

  event = {
    title: 'Event Title',
    location: 'Event Location',
    bill: {
      headline: 'Headline',
      supports: ['Sup1', 'Sup2']
    }
  }

  canSave = true;

  post = {
    title: "Title",
    isFavourite: true
  }

  tweet = {
    body: "Test",
    isLiked: true,
    likesCount: 10
  }

  onFavouriteChange(eventArgs: FavouriteChangedEventArgs){
    console.log("Fav Changed: ", eventArgs)
  }

}