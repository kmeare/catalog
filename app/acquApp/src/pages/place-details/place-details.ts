import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlacesProvider } from '../../providers/places/places';

/**
 * Generated class for the PlaceDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-place-details',
  templateUrl: 'place-details.html',
})
export class PlaceDetailsPage {

  place = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private PlacesProvider: PlacesProvider) {
    this.getPlaceDetails();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlaceDetailsPage');
  }

  getPlaceDetails() {
    this.PlacesProvider.getPlaceById(this.navParams.data.id).subscribe((data)=>{
      this.place = data;
    })
  }

}
