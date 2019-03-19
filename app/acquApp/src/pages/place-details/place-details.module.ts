import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlaceDetailsPage } from './place-details';
import { LaunchNavigator } from '@ionic-native/launch-navigator';

@NgModule({
  declarations: [
    PlaceDetailsPage,
  ],
  providers:[
    LaunchNavigator
  ],
  imports: [
    IonicPageModule.forChild(PlaceDetailsPage),
  ],
})
export class PlaceDetailsPageModule {}
