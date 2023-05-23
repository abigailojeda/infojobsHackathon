import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OffersService } from '../../services/offers/offers.service';
import { RegionsService } from '../../services/regions/regions.service';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.scss']
})
export class OffersListComponent implements OnInit {
public offers: any
  constructor(private offersService:OffersService,
    private regionsService:RegionsService) { }
  ngOnInit() {
   this.getOffers(); 
   this.getRegions()
  }

  public logo:string = 'assets/img/app_icon.svg'

  public getOffers(): void {
    this.offersService.getOffers().subscribe(
      (response) => {
        console.log(response); // Puedes realizar acciones adicionales con la respuesta recibida
        this.offers = response.offers;
      },
      (error) => {
        console.log('Error occurred:', error);
        // Puedes manejar el error aquí, lanzar una notificación, etc.
      }
    );
  }
  public getRegions(): void {
    this.regionsService.getRegions().subscribe(
      (response) => {
        console.log(response); // Puedes realizar acciones adicionales con la respuesta recibida
        this.offers = response.offers;
      },
      (error) => {
        console.log('Error occurred:', error);
        // Puedes manejar el error aquí, lanzar una notificación, etc.
      }
    );
  }
  

}
