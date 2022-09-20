import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

/**
 * Definicion de asociaciones
 */
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: [

  ]
})

/**
 * Definicion de las vaiables asociadas a los campos de texto
 */
export class ClientComponent implements OnInit {
  idNumber: any;
  name: any;
  user: any;
  email: any;
  password: any;

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
