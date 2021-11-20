import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsNewsPage } from './details-news.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsNewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsNewsPageRoutingModule {}
