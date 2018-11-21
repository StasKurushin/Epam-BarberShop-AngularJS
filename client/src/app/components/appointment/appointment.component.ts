import { Component, OnInit } from '@angular/core';
import { FormGroupDirective, NgForm, FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Services } from '../../interfaces/services';
import { AppointmentService } from 'src/app/services/appointment.service';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {
  public services: Services[] = [
    {
      item: 'Haircut',
      price: 15,
      checked: false
    },
    {
      item: 'Shaving',
      price: 10,
      checked: false
    },
    {
      item: 'Beard Grooming',
      price: 8,
      checked: false
    },
  ];

  isLinear = false;
  minDate = new Date();
  checked = false;
  totalPrice = 0;
  barber = '';
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder,
              public snackBar: MatSnackBar,
              public appointmentService: AppointmentService) {}

  ngOnInit() {
    this.secondFormGroup = this._formBuilder.group({
      emailFormControl: ['', Validators.required],
      telFormControl: ['', Validators.required],
      nameFormControl: ['', Validators.required],
      dateFormControl: ['', Validators.required],
    });
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
  }

  openSnackBar(message: string, action: string) {
    message = 'Appointment created successfully';
    action = 'Yohoo!';
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  onClickPrise(price, id) {
    this.services.map((el, idx) => {
      if (id === idx) {
        if (el.checked) {
          this.totalPrice -= price;
          el.checked = false;
        } else {
          this.totalPrice += price;
          el.checked = true;
        }
        this.appointmentService.addPriceToAppointment(this.totalPrice);
      }
    });
  }

  handleInput(value, type) {
    console.log(typeof value, type);
    this.appointmentService.addToAppointmentState(value, type);
  }
}


