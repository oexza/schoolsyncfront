import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SchoolProtectedPagesGuardService } from '../../school/school-protected-pages-guard.service';

const dashboardRoutes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        canActivate: [SchoolProtectedPagesGuardService]
    }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes)
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
