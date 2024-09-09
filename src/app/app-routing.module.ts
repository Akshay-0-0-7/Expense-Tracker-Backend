import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/Forms/login/login.component';
import { RegisterComponent } from './Components/Forms/register/register.component';
import { AboutusComponent } from './Components/Pages/aboutus/aboutus.component';
import { AccountsComponent } from './Components/Pages/accounts/accounts.component';
import { LearningComponent } from './Components/Pages/learning/learning.component';
import { StocksComponent } from './Components/Pages/stocks/stocks.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"about-us",component:AboutusComponent},
  {path:"stocks",component:StocksComponent},
  {path:"learning",component:LearningComponent},
  {path:"accounts",component:AccountsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
