import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RestaurantsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-restaurants',
  templateUrl: 'restaurants.html',
})
export class RestaurantsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RestaurantsPage');
  }

  openMapPage(){
    this.navCtrl.push('MapPage',{
      type: 'restaurant'
    })
  }

  openByFilterPage(){
    this.navCtrl.push('ByfilterPage',{
      type: 'restaurant',
      mode: 'Tipo de Comida'
    })
  }

  openByCardPage(section,type){
    this.navCtrl.push('BycardPage',{
      section: section,
      type: type
    })
  }

}
