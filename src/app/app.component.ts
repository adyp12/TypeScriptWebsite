import { Component } from '@angular/core';
import { FavouriteChangedEventArgs } from './favourite/favourite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
