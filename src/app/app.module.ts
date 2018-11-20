import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule, MatMenuModule, MatButtonModule,
         MatToolbarModule, MatCardModule, MatTooltipModule,
         MatStepperModule, MatCheckboxModule, MatRadioModule,
         MatDividerModule, MatGridListModule, MatDatepickerModule,
         MatNativeDateModule, MatSnackBarModule, MatExpansionModule, MatAccordion } from '@angular/material';

import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';
import { PoleComponent } from './components/pole/pole.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountComponent } from './components/account/account.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    PoleComponent,
    AppointmentComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatCardModule,
    MatStepperModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDividerModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
