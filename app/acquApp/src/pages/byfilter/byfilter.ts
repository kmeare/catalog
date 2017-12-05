import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.type = this.navParams.get('type');
    this.mode = this.navParams.get('mode');
    console.log(`${this.type} and ${this.mode}`);
  }

  openByCard(section, type) {
    this.navCtrl.push('BycardPage',{
      section: section,
      type: type
    })
  }

}
