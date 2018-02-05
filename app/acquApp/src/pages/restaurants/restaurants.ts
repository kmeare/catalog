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
      type: 'restaurante'
    })
  }

  openByFilterPage(){
    this.navCtrl.push('ByfilterPage',{
<<<<<<< HEAD
      section: 'restaurante',
      mode: 'Tipo de Comida'
=======
      section: 'restaurant',
      type: 'type'
>>>>>>> 3448851faddf48e9147a7ef371b6ba0b35f1f4c7
    })
  }

  openByCardDelivery(){
    this.navCtrl.push('BycardPage',{
      section: 'restaurante',
      type: 'delivery'
    })
  }

  openByCard(){
    this.navCtrl.push('BycardPage',{
      section: 'restaurante',
      type: 'basic'
    })
  }

}
