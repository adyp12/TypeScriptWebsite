import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GigComponent } from './gig/gig.component';
import { GigsService } from './gigs.service';
import { GigsComponent } from './gigs/gigs.component';
import { ArtistsComponent } from './artists/artists.component';
import { ArtistsService } from './artists.service';

@NgModule({
  declarations: [
    AppComponent,
    GigComponent,
    GigsComponent,
    ArtistsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    GigsService,
    ArtistsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
