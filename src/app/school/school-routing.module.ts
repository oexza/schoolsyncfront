import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { SchoolComponent } from '../school/school.component';
import { SchoolCanActivateGuardService } from '../services/school-can-activate-guard.service';
import { SchoolHomeComponent } from './school-home/school-home.component';

const schoolRoutes: Routes = [
    {
        path: '',
        component: SchoolComponent,
        canActivate: [SchoolCanActivateGuardService],
        children: [
            {
                path: '',
                redirectTo:"home"
            },
            {
                path: 'home',
                component: SchoolHomeComponent
            }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(schoolRoutes), MaterialModule, ReactiveFormsModule, FormsModule
    ],
    exports: [
        RouterModule
    ],

})
export class SchoolRoutingModule { }