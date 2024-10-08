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
import { AnalyticsComponent } from './Components/Pages/analytics/analytics.component';

// Chart Module
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { BaseChartDirective } from 'ng2-charts';
import { CurrentStatusComponent } from './Components/Pages/analytics/current-status/current-status.component';
import { RecentTransactionsComponent } from './Components/Pages/analytics/recent-transactions/recent-transactions.component';
import { PieChartComponent } from './Components/Pages/analytics/pie-chart/pie-chart.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { BarChartComponent } from './Components/Pages/analytics/bar-chart/bar-chart.component';@NgModule({
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
    AnalyticsComponent,
    CurrentStatusComponent,
    RecentTransactionsComponent,
    PieChartComponent,
    BarChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BaseChartDirective,
    FullCalendarModule

  ],
  providers: [
    provideCharts(withDefaultRegisterables()) // Adding provideCharts here
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}