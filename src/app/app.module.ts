import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './Components/Forms/login/login.component';
import { RegisterComponent } from './Components/Forms/register/register.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/Navigation/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutusComponent } from './Components/Pages/aboutus/aboutus.component';
import { StocksComponent } from './Components/Pages/stocks/stocks.component';
import { LearningComponent } from './Components/Pages/learning/learning.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    AboutusComponent,
    StocksComponent,
    LearningComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
