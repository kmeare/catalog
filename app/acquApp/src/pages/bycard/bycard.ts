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
    if(this.navParams.data.section == 'bar'){
      this.PlacesProvider.getPlaceBy2Cats(this.navParams.data.section, 'antro').subscribe((data)=>{
        return this.places = data[0].places;
      });
    }
    this.PlacesProvider.getPlaceByCat(this.navParams.data.section).subscribe((data)=>{
      this.places = data[0].places;
      if(this.navParams.data.type == 'delivery'){
        this.places = this.places.filter((x)=> x.delivery == 1);
      }
    });
  }

  openPlacePage(id) {
    this.navCtrl.push('PlaceDetailsPage',{
      id: id
    });
  }

}
