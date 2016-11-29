import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SchoolComponent } from './school.component';
import { SchoolRoutingModule } from './school-routing.module';
import { SchoolHomeComponent } from './school-home/school-home.component';
import { SchoolCanActivateGuardService } from '../services/school-can-activate-guard.service';
import { SchoolProtectedPagesGuardService } from '../school/school-protected-pages-guard.service';
import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,ReactiveFormsModule,
    SchoolRoutingModule
  ],
  declarations: [SchoolComponent, SchoolHomeComponent],
  exports: [MaterialModule],
  providers: [
    SchoolProtectedPagesGuardService,
    SchoolCanActivateGuardService
  ]
})
export class SchoolModule { }
