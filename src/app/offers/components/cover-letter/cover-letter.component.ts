import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cover-letter',
  templateUrl: './cover-letter.component.html',
  styleUrls: ['./cover-letter.component.scss'],
})
export class CoverLetterComponent {
  @ViewChild('textToCopy', { static: false }) textToCopy!: ElementRef;

  @Input() coverLetter: any;
  @Input() error: any;
  @Input() title: any;
  @Input() offer: any;
  @Input() isLoading: any;
  @Input() company: any;
  @Output() toggleCoverLetter = new EventEmitter<any>();
  @Output() reloadCoverLetter = new EventEmitter<any>();

  public copy: string = 'assets/img/copy.svg';
  public copied: string = 'assets/img/copied.svg';
  public save: string = 'assets/img/save.svg';
  public reload: string = 'assets/img/reload.svg';

  public isCopied: boolean = false;

  constructor() {}

  

  public handleClick(event: any): void {
    const targetElement = event.target as HTMLElement;
    if (targetElement.classList.contains('close-letter')) {
      this.toggleCoverLetter.emit();
    }
  }

  public hideCoverLetter() {
    this.toggleCoverLetter.emit();
  }

  public reloadLetter() {
    this.reloadCoverLetter.emit(this.offer);
  }

  copyContent() {
    const textToCopy = this.coverLetter;

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        this.isCopied = true;

        setTimeout(() => {
          this.isCopied = false;
        }, 1000);
      })
      .catch((error) => {
        // console.error( error);
      });
  }
 


  
}
