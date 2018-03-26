import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlacesProvider } from '../../providers/places/places';

/**
 * Generated class for the ByfilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-byfilter',
  templateUrl: 'byfilter.html',
})
export class ByfilterPage {
  
  type: string;
  mode: string;
  places = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private PlacesProvider: PlacesProvider) {
    this.getPlaceByArgs();
  }

  ionViewDidLoad() {
    this.type = this.navParams.get('type');
    this.mode = this.navParams.get('mode');
    console.log(`${this.type} and ${this.mode}`);
  }

  getPlaceByArgs() {
    
    this.PlacesProvider.getPlaces(this.navParams.data.section).subscribe((data)=>{
      this.places = data;
      console.log(this.places);
    });
  }

  openByCard(section, type) {
    this.navCtrl.push('BycardPage',{
      section: section,
      type: type
    })
  }

}
