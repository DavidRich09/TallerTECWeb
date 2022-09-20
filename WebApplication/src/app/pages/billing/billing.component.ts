import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../service/api.service";

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: [

  ]
})
export class BillingComponent implements OnInit {

  licensePlate: any;
  date: any;
  service: any;

  constructor(private Api :ApiService) { }

  ngOnInit(): void {
  }

  makeBilling() {
    if (this.licensePlate == "" || this.date == "" || this.service == "") {
      alert("Todos los campos son obligatorios");

    } else {
      this.Api.GenerateBill(this.licensePlate, this.date, this.service).subscribe((data) => {
        let json = JSON.parse(JSON.stringify(data));
        console.log(json);
        alert("Factura generada");
      });
    }
  }

}
