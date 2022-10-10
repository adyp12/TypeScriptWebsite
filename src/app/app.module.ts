import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GigComponent } from './gig/gig.component';
import { GigsService } from './gigs.service';
import { GigsComponent } from './gigs/gigs.component';
import { ArtistsComponent } from './artists/artists.component';
import { ArtistsService } from './artists.service';
import { FormsModule } from '@angular/forms';
import { SummaryPipe } from './summary.pipe';
import { FavouriteComponent } from './favourite/favourite.component';
import { TitleCasePipe } from './title-case.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';

@NgModule({
  declarations: [
    AppComponent,
    GigComponent,
    GigsComponent,
    ArtistsComponent,
    SummaryPipe,
    FavouriteComponent,
    TitleCasePipe,
    PanelComponent,
    LikeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    GigsService,
    ArtistsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
