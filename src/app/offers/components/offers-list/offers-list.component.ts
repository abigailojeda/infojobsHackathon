import { Component, OnInit } from '@angular/core';
import { OffersService } from '../../services/offers/offers.service';
import { RegionsService } from '../../services/regions/regions.service';
import { CategoriesService } from '../../services/categories/categories.service';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.scss'],
})
export class OffersListComponent implements OnInit {
  public offers: any;
  public regions: any;
  public categories: any;
  public categorySelected:string = ''
  public regionSelected:string = ''
  public currentPage:number =1
  public totalPages:number = 0
  public isLoading:boolean = false
  public isEmpty:boolean = false

  constructor(
    private offersService: OffersService,
    private regionsService: RegionsService,
    private categoriesService: CategoriesService,
  ) {}
  ngOnInit() {
    this.getRegions();
    this.getCategories();
  }


  public getRegions(): void {
    this.isLoading = true
    this.regionsService.getRegions().subscribe({
      next: (response) => {
      
        this.regions = response;
        this.isLoading = false
      },
      error: (error) => {
       // console.log('Error occurred:', error);
      },
    });
  }

  public updateRegion(region:string){
    this.regionSelected = region
  
  }
  public updateCategory(category:string){
    this.categorySelected = category
   
  }

  public getCategories(): void {
  
    this.categoriesService.getCategories().subscribe({
      next: (response) => {
      
        this.categories = response;
      },
      error: (error) => {
       // console.log('Error occurred:', error);
      },
    });
  }

  public getOffers(): void {
    this.isLoading = true

    this.offersService.getOffers(this.categorySelected, this.regionSelected, this.currentPage).subscribe({
      next: (response) => {
      
        this.offers = response.offers;
        this.totalPages=response.totalPages
        this.isLoading = false

        if(response.totalResults == 0){
          this.isEmpty = true
        }else{
          this.isEmpty = false
        }
      },
      error: (error) => {
        //console.log('Error occurred:', error);
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
