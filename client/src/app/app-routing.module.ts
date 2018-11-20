import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { MainComponent } from './components/main/main.component';
import { AccountComponent } from './components/account/account.component';

const routes: Routes = [
  { path: 'appointment', component: AppointmentComponent },
  { path: 'main', component: MainComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'account', component: AccountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

