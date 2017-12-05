import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WalksPage } from './walks';

@NgModule({
  declarations: [
    WalksPage,
  ],
  imports: [
    IonicPageModule.forChild(WalksPage),
  ],
})
export class WalksPageModule {}
