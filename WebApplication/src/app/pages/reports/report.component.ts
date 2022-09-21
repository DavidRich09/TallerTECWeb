import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

/**
 * Definicion de asociaciones
 */
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: [

  ]
})
export class ReportComponent implements OnInit {

  startDate: any;
  finalDate: any;

  /**
   * Constructor del API para conectar la base de datos con la pagina web
   * @param Api
   */
  constructor(private Api : ApiService) { }

  ngOnInit(): void {
  }

  /**
   * Metodo para solicitar al API la informacion del reporte
   */
  ClientReport(){
    this.Api.ClientReport().subscribe((data) => {
      console.log("Reporte generado");
      console.log(data);
    });
  }

  /**
   * Metodo para solicitar al API la informacion del reporte
   */
  LicReport(){
    this.Api.LicReport().subscribe((data) => {
      console.log("Reporte generado");
      console.log(data);
    });
  }

  /**
   * Metodo para solicitar al API la informacion del reporte de oficinas
   * @constructor
   */

  OfficeReport() {
    this.Api.GenerateOfficeReport(this.startDate,this.finalDate).subscribe((data) => {
      console.log("Reporte generado");
      console.log(data);
    });

  }
}
