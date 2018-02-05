import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlacesProvider } from '../../providers/places/places';
/**
 * Generated class for the GroupedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-grouped',
  templateUrl: 'grouped.html',
})
export class GroupedPage {

  group = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private PlacesProvider : PlacesProvider) {
    this.getElementsToGroup();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupedPage');
  }

  getElementsToGroup() {
    if(this.navParams.data.section == 'walk'){
      this.PlacesProvider.getWalks().subscribe((data)=>{
        this.group = data;
      });
    }
  }

}
