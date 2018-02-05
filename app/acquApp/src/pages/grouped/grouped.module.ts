import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GroupedPage } from './grouped';

@NgModule({
  declarations: [
    GroupedPage,
  ],
  imports: [
    IonicPageModule.forChild(GroupedPage),
  ],
})
export class GroupedPageModule {}
