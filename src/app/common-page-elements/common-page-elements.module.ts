import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonPageElementsComponent } from './common-page-elements.component';
import { FooterComponent } from './../footer/footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CommonPageElementsComponent, FooterComponent],
  exports:[FooterComponent]
})
export class CommonPageElementsModule { }
