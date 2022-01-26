import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UsersService } from '../services/users.service';
import 'leaflet';
declare let L: any;
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  icon = {
    icon: L.icon({
      iconSize: [25, 41],
      iconAnchor: [13, 0],
      iconUrl: '../../assets/images/marker-icon.png',
      shadowUrl: '../../assets/images/marker-shadow.png',
    }),
  };

  users: Array<User> = new Array<User>();

  constructor(private userService: UsersService
  ) {

  }


  ngOnInit(): void {


    const map = L.map('map').setView([0, 0], 1);

    L.tileLayer('https://api.maptiler.com/maps/streets/256/{z}/{x}/{y}.png?key=FKuW2pF0QjHEj2kwsUrL', {
      maxZoom: 20,
      attribution:
        '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    }).addTo(map);

    this.userService.all().subscribe({
      next: (u) => {

        this.users = u;

        this.users.forEach(user => {
          const marker = L.marker([user.latitude, user.longitude], this.icon).addTo(map);

          marker.bindPopup(`<b>${user.name}</b><br>${user.country}/${user
            .province}.`).openPopup();
        })
      },
      error: (e) => console.log(e)
    })

  }

}
