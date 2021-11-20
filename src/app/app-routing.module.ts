import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'news-list',
    loadChildren: () => import('./news-list/news-list.module').then( m => m.NewsListPageModule)
  },
  {
    path: 'details-news',
    loadChildren: () => import('./details-news/details-news.module').then( m => m.DetailsNewsPageModule)
  },
  {
    path: 'media',
    loadChildren: () => import('./media/media.module').then( m => m.MediaPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
