import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffersPageComponent } from './pages/offers-page/offers-page.component';
import { OffersRoutingModule } from './offers-routing.module';
import { OffersListComponent } from './components/offers-list/offers-list.component';
import { RegionsComponent } from './components/regions/regions.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FormsModule } from '@angular/forms';
import { OffersResultComponent } from './components/offers-result/offers-result.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { OfferComponent } from './pages/offer/offer.component';
import { OfferDetailComponent } from './components/offer-detail/offer-detail.component';
import { CoverLetterComponent } from './components/cover-letter/cover-letter.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    OffersPageComponent,
    OffersListComponent,
    RegionsComponent,
    CategoriesComponent,
    OffersResultComponent,
    PaginatorComponent,
    OfferComponent,
    OfferDetailComponent,
    CoverLetterComponent
  ],
  imports: [
    CommonModule,
    OffersRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class OffersModule { }
