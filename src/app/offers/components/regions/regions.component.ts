import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss']
})
export class RegionsComponent implements OnInit {
  @Input() regions:any
  @Output() selectRegion = new EventEmitter<any>();

  public selectedRegion:string=''
  public filterValue: string = ''
  public showDropdown: boolean = false;

  public downArrow:string = 'assets/img/down_arrow_icon.svg'


  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('document:click', ['$event.target'])
  onClick(target: any) {
    const isDropdownClick = target.classList.contains('region-dropdown'); 

    if (!isDropdownClick) {
      this.showDropdown = false;
      this.filterValue=''
    
    }else{
      this.showDropdown = true;

    }
  }

  public setRegion(region:any){
    this.selectRegion.emit(region)
  }

}
