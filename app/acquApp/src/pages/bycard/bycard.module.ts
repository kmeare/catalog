import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BycardPage } from './bycard';

@NgModule({
  declarations: [
    BycardPage,
  ],
  imports: [
    IonicPageModule.forChild(BycardPage),
  ],
})
export class BycardPageModule {}
