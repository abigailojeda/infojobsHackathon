import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'offers',
    loadChildren: () => import('./offers/offers.module').then(m => m.OffersModule)
  },
  {
    path: '**',
    redirectTo: 'offers'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
