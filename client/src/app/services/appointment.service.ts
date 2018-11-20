import { Injectable } from '@angular/core';
import { Appointment } from '../interfaces/appointment';

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
  constructor() { }


  addToAppointmentState(value: string, type: string) {
    if (type === 'text') {
      this.appointment.name = value;
    } else {
      this.appointment[type] = value;
    }
  }

  addPriceToAppointment(price: number) {
    this.appointment.price = price;
  }
}
