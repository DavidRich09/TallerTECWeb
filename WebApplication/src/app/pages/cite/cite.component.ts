import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-cite',
  templateUrl: './cite.component.html',
  styleUrls: [

  ]
})
export class CiteComponent implements OnInit {
  responsible: any;
  assistant: any;
  licensePlate: any;
  service: any;
  client: any;
  office: any;
  date: any;

  constructor(private Api : ApiService) { }

  ngOnInit(): void {
  }

  saveCite(){
    //verificar que los campos no esten vacios
    if (this.licensePlate == undefined || this.service == undefined || this.client == undefined ||
      this.office == undefined || this.date == undefined || this.licensePlate == " " || this.service == ""
      || this.client == "" || this.office == "" || this.date == "") {
      alert("Todos los campos son obligatorios");
    } else {
      this.Api.PostCite({
        responsible: this.responsible,
        assistant: this.assistant,
        licensePlate: this.licensePlate,
        service: this.service,
        client: this.client,
        office: this.office,
        date: this.date
      }).subscribe((data) => {
        console.log("Cita agendada");
        console.log(data);
      });
    }
  }

}
