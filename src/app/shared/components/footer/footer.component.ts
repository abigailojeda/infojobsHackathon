import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  
  public logo: string = 'assets/img/app_icon.svg';

  constructor() {}

  ngOnInit(): void {}
}
