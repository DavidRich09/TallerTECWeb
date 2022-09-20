import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: [

  ]
})
export class ClientComponent implements OnInit {
  idNumber: any;
  name: any;
  user: any;
  email: any;
  password: any;

  constructor(private Api : ApiService) { }

  ngOnInit(): void {
  }

  saveClient() {
    //verificar que los campos no esten vacios
    if (this.idNumber == undefined || this.name == undefined || this.user == undefined || this.email == undefined ||
      this.idNumber == " " || this.name == " " || this.user == " " || this.email == "") {
      alert("Todos los campos son obligatorios");
    } else {
      //verificar que cedula solo contenga digitos
      if (!isNaN(this.idNumber)) {
        this.password = "Generica";
        this.Api.PostClient({
          id: this.idNumber,
          name: this.name,
          user: this.user,
          email: this.email,
          password: this.password,
          address : [{
            clientId : this.idNumber,
            nstreet : "",
            province : "",
            district : "",
            canton : "",
          }],
          phone : [{
            clientId : this.idNumber,
            phone : ""
          }]
        }).subscribe((data) => {
          console.log("Usuario almacenado");
          console.log(data);
        });

      } else {
        alert("La cedula solo debe contener numeros");
      }
    }
  }

}
