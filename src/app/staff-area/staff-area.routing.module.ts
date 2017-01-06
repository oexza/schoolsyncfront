import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { StaffAreaComponent } from './staff-area.component';
import { SchoolProtectedPagesGuardService } from '../school/school-protected-pages-guard.service';

const staffAreaRoutes: Routes = [
    {
        path: '',
        component: StaffAreaComponent,
        //canActivate: [SchoolProtectedPagesGuardService],
        children: [
            {
                path: '',
                redirectTo: "dashboard",
                pathMatch:'full'
            },
            {
                path: 'dashboard',
                loadChildren: 'app/staff-area/dashboard/dashboard.module#DashboardModule'
            }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(staffAreaRoutes), MaterialModule, ReactiveFormsModule, FormsModule
    ],
    exports: [
        RouterModule
    ],

})
export class StaffAreaRoutingModule { }