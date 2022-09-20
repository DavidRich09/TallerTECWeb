import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../service/api.service";

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
  client : any;
  responsible : any;
  assistant : any;

  constructor(private Api : ApiService) { }

  ngOnInit(): void {
  }

  makeAppointment() {

    if (this.plateNumber == undefined || this.office == undefined || this.service == undefined ||
      this.appointmentdate == undefined || this.plateNumber == " " || this.service == ""
      || this.office == "" || this.appointmentdate == "") {
      alert("Todos los campos son obligatorios");
    } else {

      (async () => {

        this.AssignWorkers();

        await this.Delay(500);

        console.log("Delay terminado")
        this.Api.PostCite({

          responsible: this.responsible,
          assistant: this.assistant,
          licensePlate: this.plateNumber,
          service: this.service,
          client: this.client,
          office: this.office,
          date: this.appointmentdate,
          replacements: [{
            licensePlate: this.plateNumber,
            replacement: "",
          }]
        }).subscribe((data) => {
          let json = JSON.parse(JSON.stringify(data));
          console.log(json);
          alert("Cita creada");
        });
      })();


    }
  }

  AssignWorkers(){
    this.Api.GetRandomWorker().toPromise().then((data) => {
      let json = JSON.parse(JSON.stringify(data));
      console.log(json);
      this.responsible = json["message"]["name"];
      console.log(this.responsible);
    });

    this.Api.GetRandomWorker().toPromise().then((data) => {
      let json = JSON.parse(JSON.stringify(data));
      console.log(json);
      this.assistant = json["message"]["name"];
      console.log(this.assistant);
    });
  }

  Delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }


}
