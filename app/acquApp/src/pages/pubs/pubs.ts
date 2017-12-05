import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PubsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pubs',
  templateUrl: 'pubs.html',
})
export class PubsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PubsPage');
  }

  openMapPage() {
    this.navCtrl.push('MapPage',{
      section: 'bar'
    })
  }

  openByCardPage() {
    this.navCtrl.push('BycardPage',{
      section: 'bar',
      type: 'basic'
    })
  }

}
