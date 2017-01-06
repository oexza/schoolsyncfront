import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffAreaComponent } from './staff-area.component';
import { StaffAreaRoutingModule } from './staff-area.routing.module';

@NgModule({
  imports: [
    CommonModule,
    StaffAreaRoutingModule
  ],
  declarations: [StaffAreaComponent]
})
export class StaffAreaModule { }
