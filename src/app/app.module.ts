import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule,HttpInterceptor } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home';
import { RegisterComponent } from './register';
import { AlertComponent } from './alert';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,HomeComponent,RegisterComponent,AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, ReactiveFormsModule,HttpClientModule,NgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { };
