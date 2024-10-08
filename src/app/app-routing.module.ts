import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ForgotPasswordComponent } from './Components/Forms/forgotpassword/forgotpassword.component';
import { LoginComponent } from './Components/Forms/login/login.component';
import { RegisterComponent } from './Components/Forms/register/register.component';
import { AboutusComponent } from './Components/Pages/aboutus/aboutus.component';
import { AccountsComponent } from './Components/Pages/accounts/accounts.component';
import { AnalyticsComponent } from './Components/Pages/analytics/analytics.component';
import { LearningComponent } from './Components/Pages/learning/learning.component';
import { StocksComponent } from './Components/Pages/stocks/stocks.component';
import { TransactionsComponent } from './Components/Pages/transactions/transactions.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"about-us",component:AboutusComponent},
  {path:"stocks",component:StocksComponent},
  {path:"learning",component:LearningComponent},
  {path:"accounts",component:AccountsComponent},
  {path:"forgotpassword",component:ForgotPasswordComponent},
  {path:"transactions",component:TransactionsComponent},
  {path:"home",component:LoginComponent},
  {path:"analytics",component:AnalyticsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
