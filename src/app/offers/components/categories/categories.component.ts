import { Component, OnInit, Input, HostListener, Output, EventEmitter  } from '@angular/core';
// import { Input } from '@angular/common/http';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  @Input() categories:any
  @Output() selectCategory = new EventEmitter<any>();
    
  public selectedCategory:string=''
  public filterValue: string = ''
  public showDropdown: boolean = false;
  public downArrow:string = 'assets/img/down_arrow_icon.svg'

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('document:click', ['$event.target'])
  onClick(target: any) {
    const isDropdownClick = target.classList.contains('dropdown'); 
    if (!isDropdownClick) {
      this.showDropdown = false; 
    
    }else{
      this.showDropdown = true; 

    }
  }

  public setCategory(category:any){
    this.selectCategory.emit(category)
  }

}
