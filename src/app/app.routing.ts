import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LeafletMapComponent } from './leaflet-map/leaflet-map.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'landing', pathMatch: 'full'
  },
  {
    path: 'landing',
    component: LandingComponent,
  },
  {
    path: 'mapping',
    component: LeafletMapComponent,
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
