import { NgModule } from '@angular/core';
import {
  RouterModule, Routes,
  PreloadAllModules
} from '@angular/router';


const appRoutes: Routes = [
  {
    path: '',
    loadChildren: 'app/home/home.module#HomeModule'
  },

  {
    path: ':schoolId',
    loadChildren: 'app/school/school.module#SchoolModule',

  },
  {
    path: ':schoolId/staff',
    loadChildren: 'app/staff-area/staff-area.module#StaffAreaModule',

  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [

  ]
})
export class AppRoutingModule { }