import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

/**
 * Definicion de asociaciones
 */
@Component({
  selector: 'app-cite',
  templateUrl: './cite.component.html',
  styleUrls: [

  ]
})

/**
 * Definicion de las vaiables asociadas a los campos de texto
 */
export class CiteComponent implements OnInit {
  responsible: any;
  assistant: any;
  licensePlate: any;
  service: any;
  client: any;
  office: any;
  date: any;

  /**
   * Constructor del API para conectar la base de datos con la pagina web
   * @param Api
   */
  constructor(private Api : ApiService) { }

  ngOnInit(): void {
  }

  /**
   * Metodo donde se validan las entradas y se envia la infromacion a la base de datos
   */
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
