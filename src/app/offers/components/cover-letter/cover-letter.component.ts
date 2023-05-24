import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-cover-letter',
  templateUrl: './cover-letter.component.html',
  styleUrls: ['./cover-letter.component.scss']
})
export class CoverLetterComponent implements OnInit {
  @ViewChild('myTextarea', { static: false }) myTextarea!: ElementRef;

  @Input() coverLetter:any
  @Input() error:any
  @Input() title:any
  @Input() isLoading:any
  @Input() company:any
  @Output() toggleCoverLetter = new EventEmitter<any>();
  @Output() reloadCoverLetter = new EventEmitter<any>();

  public copy: string = 'assets/img/copy.svg';
  public save: string = 'assets/img/save.svg';
  public reload: string = 'assets/img/reload.svg';
  public copyText: string=''



  constructor() { }

  ngOnInit(): void {
  }

  public handleClick(event: any): void {
    const targetElement = event.target as HTMLElement;
    if (targetElement.classList.contains('close-letter')) {
      this.toggleCoverLetter.emit();
    }
  }

  public hideCoverLetter(){
    this.toggleCoverLetter.emit()
  }

  public reloadLetter(){
    this.reloadCoverLetter.emit(this.title)
  }

 public getCopyText() {
  this.myTextarea.nativeElement.select();
  document.execCommand('copy');
 }



}
