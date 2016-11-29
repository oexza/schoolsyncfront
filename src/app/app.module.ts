import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { ApolloClient } from 'apollo-client';
import { ApolloModule } from 'angular2-apollo';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from '../app/services/auth.service';

import { client } from './client';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    MaterialModule.forRoot(),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    ApolloModule.withClient(client)
  ],
  exports: [MaterialModule],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
