import {AfterViewInit, Component, EventEmitter, OnInit, ViewChild} from '@angular/core';
import {ApiService} from "../../service/api.service";

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: []
})
export class BillsComponent implements OnInit {

  id: any;
  json: any;


  constructor(private Api : ApiService) { }

  ngOnInit(): void {
  }

  watchBillsOn() {
    (async ()  => {

      this.getUser();

      await this.Delay(500);

      this.Api.GetBills(this.id).toPromise().then((data) => {
        let json = JSON.parse(JSON.stringify(data));
        console.log(json);

        this.json = "";
        for (let i = 0; i < json.length; i++) {
          this.json += "Servicio: " + json[i]["service"] + "\n" +
            "Costo: " + json[i]["cost"] + "\n" +
            "Mecanico: " + json[i]["mecanic"] + "\n" +
            "Fecha: " + json[i]["date"] + "\n" +
            "Placa: " + json[i]["licensePlate"] + "\n"+
          "\n";
        }
        console.log(this.json);

      });

    })();
  }

  getUser() {
    this.Api.GetUser().toPromise().then((data) => {
      let json = JSON.parse(JSON.stringify(data));
      console.log(json);
      this.id = json["message"];
    });
  }

  Delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

}
