import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from 'src/components/shared/navbar/navbar.component';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { LandingComponent } from './landing/landing.component';
import { AppService } from './services/app.service';
import { UsersService } from './services/users.service';
import { SignupComponent } from './signup/signup.component';
import { UserMarkerComponent } from './user-marker/user-marker.component';
import { UsersAddressComponent } from './users-address/users-address.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    SignupComponent,
    UserMarkerComponent,
    UsersAddressComponent,
    AdminDashboardComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AppService,
    UsersService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
