import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment
} from '@ionic-native/google-maps';
import { Component, OnInit } from "@angular/core";
import {mapStyle} from "./mapStyle"
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit {
  map: GoogleMap;

  // markers: Marker[] = [
  //  {

  //   },
  //   {

  //   },
  // ]

  constructor() { }

  ngOnInit() {
    this.loadMap();
  }

  loadMap() {

    // This code is necessary for browser
     Environment.setEnv({
       'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyBsUoZWA9fud8qZFFAxo6qHLDfNrhVN1RQ',
       'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyBsUoZWA9fud8qZFFAxo6qHLDfNrhVN1RQ'
     });

    let mapOptions: GoogleMapOptions = {
      camera: {
         target: {
           lat: 43.5484341,
           lng: 1.5029739
         },
         zoom: 18,
        
        tilt: 30
       },
       styles: mapStyle
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);

    let marker: Marker = this.map.addMarkerSync({
      title: 'Ionic',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: 43.5484341,
        lng: 1.5029739
      }
    });
    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      alert('clicked');
    });
  }
}