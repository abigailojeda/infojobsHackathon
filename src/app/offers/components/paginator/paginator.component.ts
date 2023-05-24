import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnInit {
  @Input() totalPages!: number;
  @Input() currentPage!: number;
  @Output() setCurrentPage = new EventEmitter<any>();

  public leftArrow:string = 'assets/img/left_arrow_icon.svg'
  public rightArrow:string = 'assets/img/right_arrow_icon.svg'


  constructor() {}

  ngOnInit(): void {}

  getPageArray(totalPages: number, currentPage: number): number[] {
    const maxPages = 5; // Máximo número de páginas a mostrar en el recuadro
    const halfMaxPages = Math.floor(maxPages / 2);

    let startPage = currentPage - halfMaxPages;
    let endPage = currentPage + halfMaxPages;

    if (startPage < 1) {
      startPage = 1;
      endPage = maxPages;
    }

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = totalPages - maxPages + 1;
      if (startPage < 1) {
        startPage = 1;
      }
    }

    return Array(endPage - startPage + 1)
      .fill(0)
      .map((_, index) => startPage + index);
  }

  public goToPage(page: any) {
    console.log(page);
    this.setCurrentPage.emit(page)
  }
}
