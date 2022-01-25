import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from 'src/components/shared/navbar/navbar.component';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { LandingComponent } from './landing/landing.component';
import { LeafletMapComponent } from './leaflet-map/leaflet-map.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LeafletMapComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
