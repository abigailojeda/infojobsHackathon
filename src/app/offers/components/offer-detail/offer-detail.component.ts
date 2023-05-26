import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OffersService } from '../../services/offers/offers.service';
import { DatePipe } from '@angular/common';
import { OpenaiService } from '../../services/openai/openai.service';

@Component({
  selector: 'app-offer-detail',
  templateUrl: './offer-detail.component.html',
  styleUrls: ['./offer-detail.component.scss'],
})
export class OfferDetailComponent implements OnInit {
  public offerId: any = '';
  public offer: any;
  public isLoading: boolean = false;
  public coverLetterIsLoading: boolean = false;
  public defaultImg: string =
    'https://components.infojobs.com/statics/images/pic-company-logo.png';
  public users: string = 'assets/img/users.svg';
  public paper: string = 'assets/img/paper.svg';
  public leftArrow: string = 'assets/img/left_arrow_icon.svg';

  public location: string = 'assets/img/location.svg';
  public clockIcon: string = 'assets/img/clock.svg';
  public salaryIcon: string = 'assets/img/salary.svg';
  public coverLetter: any = '';
  public error: any = '';
  public showCoverLetter: boolean = false;
  public coverLetterGenerated: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private offersService: OffersService,
    private openAiService: OpenaiService
  ) {}

  ngOnInit() {
    this.offerId = this.route.snapshot.paramMap.get('id');
    this.getOffer();
  }

  public getOffer(): void {
    this.isLoading = true;

    this.offersService.getOfferById(this.offerId).subscribe({
      next: (response) => {

        this.offer = response;
        this.isLoading = false;
      },
      error: (error) => {
        //console.log('Error occurred:', error);
      },
    });
  }

  public setDateFormatted(date: string) {
    const dateString = date;
    const dateNew = new Date(dateString);

    const datePipe = new DatePipe('es-ES');
    const formattedDate = datePipe.transform(dateNew, 'dd-MM-yyyy');

    return formattedDate;
  }

  public toggleCoverLetter() {
    this.showCoverLetter = !this.showCoverLetter;
  }

  public getCoverLetter(offer: any) {
    this.coverLetterIsLoading = true;
    this.toggleCoverLetter();
    this.openAiService.getCoverLetter(offer).subscribe({
      next: (result: string) => {
        if (!result) {
          this.error = 'No se ha podido generar la carta en este momento';
        } else {
          this.error = '';
          this.coverLetter = result;
          this.coverLetterIsLoading = false;
        }
      },
      error: (error: any) => {
        console.error(error);
        this.error = 'Se produjo un error al generar la carta de presentación';
      },
    });
  }

  public reloadCoverLetter(offer: any) {
    this.coverLetterIsLoading = true;
    this.openAiService.getCoverLetter(offer).subscribe({
      next: (result: string) => {
        if (!result) {
          this.error = 'No se ha podido generar la carta en este momento';
        } else {
          this.error = '';
          this.coverLetter = result;
          this.coverLetterIsLoading = false;
        }
      },
      error: (error: any) => {
        console.error(error);
        this.error = 'Se produjo un error al generar la carta de presentación';
      },
    });
  }

  // public getUser(): void {
  //   this.offersService.getUser().subscribe({
  //     next: (response) => {
  //       console.log(response);
  //     },
  //     error: (error) => {
  //       console.log('Error occurred:', error);
  //     },
  //   });
  // }
}
