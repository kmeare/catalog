import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Geolocation, Geoposition } from "@ionic-native/geolocation";
import { PlacesProvider } from '../../providers/places/places';
/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google
@IonicPage()
@Component({
  selector: "page-map",
  templateUrl: "map.html"
})
export class MapPage {
  section: string;
  map: any; 
  places: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public geolocation: Geolocation,
    public PlacesProvider: PlacesProvider

  ) {}

  ionViewDidLoad() {
    this.section = this.navParams.get("section");
    this.getPosition();

  }

  getPosition(){
    this.geolocation.getCurrentPosition()
    .then(response => {
      this.loadMap(response);
    })
    .catch(error =>{
      console.log(error);
    })
  }

  loadMap(position: Geoposition) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    
    // create a new map by passing HTMLElement
    let mapEle: HTMLElement = document.getElementById('map');

    // create LatLng object
    let myLatLng = {lat: latitude, lng: longitude};

    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      this.PlacesProvider.getPlaces(this.navParams.data.section).subscribe((data)=>{
        this.places = data;
        for(var i=0; i<this.places.lenght; i++){
          new google.maps.Marker({
            position: {lat: this.places[i].lat, lng: this.places[i].lon},
            map: this.map,
            title: 'Hello World!'
          });
        }
        
      });
      
      mapEle.classList.add('show-map');
    });
  }
}
