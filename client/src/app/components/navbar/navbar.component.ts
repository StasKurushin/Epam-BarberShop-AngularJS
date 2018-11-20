import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
@Input ('matMenuTriggerFor')

export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
