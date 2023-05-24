import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OffersPageComponent } from './pages/offers-page/offers-page.component';
import { OfferComponent } from './pages/offer/offer.component';

const routes: Routes = [
    {
      path:'',
      component: OffersPageComponent
    },
    {
      path:'detail/:id',
      component: OfferComponent
    },
    {
      path: '**',
      redirectTo: ''
    }
  ]

  @NgModule({
    imports: [
     RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class OffersRoutingModule { }