import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { LoginComponent } from './Components/Forms/login/login.component';
import { RegisterComponent } from './Components/Forms/register/register.component';
import { NavbarComponent } from './Components/Navigation/navbar/navbar.component';
import { AboutusComponent } from './Components/Pages/aboutus/aboutus.component';
import { StocksComponent } from './Components/Pages/stocks/stocks.component';
import { LearningComponent } from './Components/Pages/learning/learning.component';
import { AccountsComponent } from './Components/Pages/accounts/accounts.component';
import { ForgotPasswordComponent } from './Components/Forms/forgotpassword/forgotpassword.component';
import { TransactionsComponent } from './Components/Pages/transactions/transactions.component';
import { HeaderComponent } from './Components/Navigation/header/header.component';
import { SidebarComponent } from './Components/Navigation/sidebar/sidebar.component';

// Animations
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
    AccountsComponent,
    ForgotPasswordComponent,
    TransactionsComponent,
    HeaderComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }