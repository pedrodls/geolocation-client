import { Component, OnInit } from '@angular/core';
import 'leaflet';
declare let L: any;

@Component({
  selector: 'app-leaflet-map',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.scss']
})
export class LeafletMapComponent implements OnInit {

  icon = {
    icon: L.icon({
      iconSize: [25, 41],
      iconAnchor: [13, 0],
      iconUrl: '../../assets/images/marker-icon.png',
      shadowUrl: '../../assets/images/marker-shadow.png',
    }),
  };

  constructor() { }


  ngOnInit(): void {

    const map = L.map('map').setView([0, 0], 1);

    L.tileLayer('https://api.maptiler.com/maps/streets/256/{z}/{x}/{y}.png?key=FKuW2pF0QjHEj2kwsUrL', {
      maxZoom: 20,
      attribution:
        '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    }).addTo(map);

    const marker = L.marker([51.5, -0.09], this.icon).addTo(map);

    //marker.bindPopup('<b>Hello world!</b><br>I am a popup.').openPopup();
    
    marker.bindPopup('<b>Hello world!</b><br>I am a popup.');
  }
}
