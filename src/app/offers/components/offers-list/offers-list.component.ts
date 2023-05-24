import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OffersService } from '../../services/offers/offers.service';
import { RegionsService } from '../../services/regions/regions.service';
import { CategoriesService } from '../../services/categories/categories.service';
import { OpenaiService } from '../../services/openai/openai.service';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.scss'],
})
export class OffersListComponent implements OnInit {
  public offers: any;
  public regions: any;
  public categories: any;
  public logo: string = 'assets/img/app_icon.svg';
  public categorySelected:string = ''
  public regionSelected:string = ''
  public currentPage:number =1
  public totalPages:number = 0
  public isLoading:boolean = false

  constructor(
    private offersService: OffersService,
    private regionsService: RegionsService,
    private categoriesService: CategoriesService,
    private openaiService:OpenaiService
  ) {}
  ngOnInit() {
    this.getRegions();
    this.getCategories();
  }


  public getRegions(): void {
    this.regionsService.getRegions().subscribe({
      next: (response) => {
        console.log(response);
        this.regions = response;
      },
      error: (error) => {
        console.log('Error occurred:', error);
      },
    });
  }

  public updateRegion(region:string){
    this.regionSelected = region
    console.log(this.regionSelected)
  }
  public updateCategory(category:string){
    this.categorySelected = category
    console.log(this.categorySelected)
  }

  public getCategories(): void {
  
    this.categoriesService.getCategories().subscribe({
      next: (response) => {
        console.log(response);
        this.categories = response;
      },
      error: (error) => {
        console.log('Error occurred:', error);
      },
    });
  }

  public getOffers(): void {
    this.isLoading = true

    this.offersService.getOffers(this.categorySelected, this.regionSelected, this.currentPage).subscribe({
      next: (response) => {
        console.log(response);
        this.offers = response.offers;
        this.totalPages=response.totalPages
        this.isLoading = false
      },
      error: (error) => {
        console.log('Error occurred:', error);
      },
    });
  }

  public updatePage(page:any){
    this.currentPage = page
    this.getOffers()

  }

  // public getCoverLetter(){
  //   this.openaiService.getCoverLetter()
  // }
}
