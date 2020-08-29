import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchPageComponent } from './pages/search-page/search-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

const routes: Routes = [

  // Home and search is working to search farmer panel
  {
    path: '',
    component:  SearchPageComponent
  },
  {
      path: 'search',
      component: SearchPageComponent
  },

  // Page not found
  {
      path: '**',
      component: NotFoundPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
