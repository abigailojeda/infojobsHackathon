import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    LoadingComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LoadingComponent,
    FooterComponent
  ]
})
export class SharedModule { }
