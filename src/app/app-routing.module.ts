import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/unauth/home/home/home.component';
import { LoginComponent } from './pages/unauth/login/login/login.component';
import { SignupComponent } from './pages/unauth/signup/signup/signup.component';
import { SignupCompleteComponent } from './pages/unauth/signup/signup-complete/signup-complete.component';
import { DashboardComponent } from './pages/auth/dashboard/dashboard/dashboard.component';
import { CartComponent } from './pages/auth/cart/cart/cart.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "login/signup", component: SignupComponent },
  { path: "signup-complete", component: SignupCompleteComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "login/dashboard", component: DashboardComponent },
  { path: "cart", component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
