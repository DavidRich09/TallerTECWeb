import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  saveWorler() {
    //verificar que los campos no esten vacios
    if (this.cedula == "" || this.idNumber == "" || this.name == "" || this.lastName == "" || this.dateAccess == "" || this.dateBorn == "" || this.password == "") {
      alert("Todos los campos son obligatorios");
    } else {
      //verificar que cedula solo contenga digitos
      if (isNaN(this.cedula) ) {
        console.log("cedula correcta");
      } else {
        alert("La cedula solo debe contener numeros");
      }
    }
  }
}
