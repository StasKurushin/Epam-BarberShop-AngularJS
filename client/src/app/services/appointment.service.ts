import { Injectable } from '@angular/core';
import { Appointment } from '../interfaces/appointment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  public appointment: Appointment = {
    barber: '',
    name: '',
    email: '',
    tel: '',
    date: '',
    price: 0
  };
  constructor(private http: HttpClient) { }


  addToAppointmentState(value: string, type: string) {
    console.log(value);
   this.appointment[type] = value;
   console.log(this.appointment);
  }

  addPriceToAppointment(price: number) {
    this.appointment.price = price;
  }

  createAppointment() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/appointment', this.appointment);
  }
}
