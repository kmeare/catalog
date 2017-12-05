import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HotelsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hotels',
  templateUrl: 'hotels.html',
})
export class HotelsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HotelsPage');
  }

  openMapPage(){
    this.navCtrl.push('MapPage',{
      section: 'hotels'
    })
  }

  openByStars(){
    this.navCtrl.push('BycardPage',{
      section: 'hotel',
      type: 'stars'
    })
  }

  openByCard(section,type){
    this.navCtrl.push('BycardPage',{
      section: 'hotel',
      type: 'basic'
    })
  }

}
