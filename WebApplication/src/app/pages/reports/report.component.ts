import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: [

  ]
})
export class ReportComponent implements OnInit {

  constructor(private Api : ApiService) { }

  ngOnInit(): void {
  }

  ClientReport(){
    this.Api.ClientReport().subscribe((data) => {
      console.log("Reporte generado");
      console.log(data);
    });
  }

  LicReport(){
    this.Api.LicReport().subscribe((data) => {
      console.log("Reporte generado");
      console.log(data);
    });
  }

}
