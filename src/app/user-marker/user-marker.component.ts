import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../services/users.service';

import 'leaflet';
import { User } from '../models/user';
declare let L: any;


@Component({
  selector: 'app-user-marker',
  templateUrl: './user-marker.component.html',
  styleUrls: ['./user-marker.component.scss']
})
export class UserMarkerComponent implements OnInit {

  icon = {
    icon: L.icon({
      iconSize: [25, 41],
      iconAnchor: [13, 0],
      iconUrl: '../../assets/images/marker-icon.png',
      shadowUrl: '../../assets/images/marker-shadow.png',
    }),
  };

  user: User = new User()

  constructor(private userService: UsersService,
              private activatedRoute: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    const map = L.map('map').setView([0, 0], 1);

    L.tileLayer('https://api.maptiler.com/maps/streets/256/{z}/{x}/{y}.png?key=FKuW2pF0QjHEj2kwsUrL', {
      maxZoom: 20,
      attribution:
        '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    }).addTo(map);

    this.userService.one(this.activatedRoute.snapshot.params['id']).subscribe({
      next: (u) => {
        this.user = u[0];

        const marker = L.marker([this.user.latitude, this.user.longitude], this.icon).addTo(map);

          marker.bindPopup(`<b>${this.user.name}</b><br>${this.user.country}/${this.user.province}.`).openPopup();
      },
      error: () => []
    })
  }
}
