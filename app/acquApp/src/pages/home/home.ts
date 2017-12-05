import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  homeNavigation(param) {
    switch(param){
      case 1:
        this.navCtrl.push('HotelsPage');  
        break;
      
      case 2:
        this.navCtrl.push('RestaurantsPage');
        break;

      case 3: 
        this.navCtrl.push('PubsPage');
        break;

      case 4: 
        this.navCtrl.push('WalksPage');
        break;
      
      case 5:
        this.navCtrl.push('RestaurantsPage');
        break; 
    }
    
  }

}
