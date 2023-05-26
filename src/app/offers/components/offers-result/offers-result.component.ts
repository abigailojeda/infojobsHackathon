import { Component, Input, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { OpenaiService } from '../../services/openai/openai.service';


@Component({
  selector: 'app-offers-result',
  templateUrl: './offers-result.component.html',
  styleUrls: ['./offers-result.component.scss']
})
export class OffersResultComponent implements OnInit {
  @Input() offers:any
  @Input() isLoading:any
  @Input() isEmpty:any

  public searchIllustration:string = 'assets/img/search_illustration.svg'
  public noFoundIllustration:string = 'assets/img/no_results_illustration.svg'
  public salaryIcon:string = 'assets/img/salary.svg'
  public homeIcon:string = 'assets/img/home.svg'
  public clockIcon:string = 'assets/img/clock.svg'
  public skillsIcon:string = 'assets/img/test-checked.svg'
  public defaultImg:string='https://components.infojobs.com/statics/images/pic-company-logo.png'




  ngOnInit(): void {
  }

  public setDateFormatted(date:string){
    const dateString = date;
    const dateNew = new Date(dateString);
    
    const datePipe = new DatePipe('es-ES');
    const formattedDate = datePipe.transform(dateNew, 'dd-MM-yyyy');
    
    return formattedDate;
    
  }


}
