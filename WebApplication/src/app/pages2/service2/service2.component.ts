import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service2',
  templateUrl: './service2.component.html',
  styleUrls: []
})
export class Service2Component implements OnInit {

  plateNumber: any;
  office: any;
  service: any;
  appointmentdate: any;

  constructor() { }

  ngOnInit(): void {
  }

  makeAppointment() {

  }

}
