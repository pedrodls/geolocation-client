import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { SignupComponent } from './signup/signup.component';
import { UserMarkerComponent } from './user-marker/user-marker.component';
import { UsersAddressComponent } from './users-address/users-address.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'landing', pathMatch: 'full'
  },
  {
    path: 'landing',
    component: LandingComponent,
  },
  {
    path: 'signup_address',
    component: SignupComponent,
  },
  {
    path: 'users_address',
    component: UsersAddressComponent,
  },
  {
    path: 'mapping/:id',
    component: UserMarkerComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
