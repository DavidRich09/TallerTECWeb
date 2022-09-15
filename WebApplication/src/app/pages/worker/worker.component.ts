import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: [

  ]
})
export class WorkerComponent implements OnInit {
  cedula: any;
  idNumber: any;
  name: any;
  lastName: any;
  dateAccess: any;
  dateBorn: any;
  password: any;


  constructor(private Api : ApiService) { }

  ngOnInit(): void {
  }

  saveWorler() {
    //verificar que los campos no esten vacios
    if (this.cedula == "" || this.idNumber == "" || this.name == "" || this.lastName == "" || this.dateAccess == "" || this.dateBorn == "" || this.password == "") {
      alert("Todos los campos son obligatorios");
    } else {
      //verificar que cedula solo contenga digitos
      if (isNaN(this.cedula) ) {

        this.Api.PostWorker({
          idNumber: this.idNumber,
          name: this.name,
          lastName: this.lastName,
          dateAdmisson: this.dateAccess,
          dateBirth: this.dateBorn,
          rol: "Worker",
          password: this.password
        }).subscribe((data) => {
          console.log(data);
        });

      } else {
        alert("La cedula solo debe contener numeros");
      }
    }
  }
}
