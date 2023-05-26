import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';
import { FooterComponent } from './components/footer/footer.component';
import { LetterAnimationComponent } from './components/letter-animation/letter-animation.component';



@NgModule({
  declarations: [
    LoadingComponent,
    FooterComponent,
    LetterAnimationComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LoadingComponent,
    FooterComponent,
    LetterAnimationComponent
  ]
})
export class SharedModule { }
