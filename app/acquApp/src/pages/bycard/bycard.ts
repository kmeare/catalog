import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlacesProvider } from '../../providers/places/places';

/**
 * Generated class for the BycardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bycard',
  templateUrl: 'bycard.html',
})
export class BycardPage {

  section:string;
  type:string;
  places = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private PlacesProvider : PlacesProvider) {
    this.getPlaceByArgs();
  }

  ionViewDidLoad() {
    this.type = this.navParams.get('type');
    this.section = this.navParams.data.section;

  }

  getPlaceByArgs() {

    this.PlacesProvider.getPlaces(this.navParams.data.section,this.type).subscribe((data)=>{
      this.places = data;
      console.log(this.places);
    });
  }

  openPlacePage(id) {
    this.navCtrl.push('PlaceDetailsPage',{
      id: id
    });
  }

}
