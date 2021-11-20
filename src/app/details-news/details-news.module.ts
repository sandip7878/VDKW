import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsNewsPageRoutingModule } from './details-news-routing.module';

import { DetailsNewsPage } from './details-news.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsNewsPageRoutingModule
  ],
  declarations: [DetailsNewsPage]
})
export class DetailsNewsPageModule {}
