import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatSliderModule } from '@angular/material/slider';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import {CdkStepperModule} from '@angular/cdk/stepper';

import { HomeComponent } from './pages/unauth/home/home/home.component';
import { DashboardComponent } from './pages/auth/dashboard/dashboard/dashboard.component';
import { LoginComponent } from './pages/unauth/login/login/login.component';
import { SignupComponent } from './pages/unauth/signup/signup/signup.component';
import { SignupCompleteComponent } from './pages/unauth/signup/signup-complete/signup-complete.component';
import { CartComponent } from './pages/auth/cart/cart/cart.component';
import { QuestionStepperComponent } from './components/question-stepper/question-stepper.component';
import { ExamComponent } from './pages/auth/exam/exam/exam.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent,
    SignupCompleteComponent,
    CartComponent,
    QuestionStepperComponent,
    ExamComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatSliderModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatCheckboxModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    CdkStepperModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
