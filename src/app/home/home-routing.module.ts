import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { MaterialModule } from '@angular/material';

const homeRoutes: Routes = [
    {path:'', component:HomeComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes),
    MaterialModule
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule {}