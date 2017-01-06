import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from '@angular/material';
import { CommonPageElementsModule } from './../common-page-elements/common-page-elements.module';

@NgModule({
  imports: [
    CommonModule,
    CommonPageElementsModule,
    HomeRoutingModule,
    MaterialModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
