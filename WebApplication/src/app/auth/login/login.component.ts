import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from "../../service/api.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent implements OnInit {

  role: any;
  id: any;
  password: any;

  constructor( private router: Router, private Api : ApiService ) { }


  ngOnInit(): void {
  }

  onLogin() {
    console.log("login");
    console.log("role "+ this.role);
    console.log("email "+ this.id);

    if (this.role == "" || this.id == "" || this.password == "") {
      alert("Ingrese sus Datos y seleccione su rol");
    } else if (this.role == "Trabajador") {
      this.Api.GetWorkerById(this.id).toPromise().then((data) => {
        let json = JSON.parse(JSON.stringify(data));
        console.log(json);
        if (json["message"] == "worker not exist") {
          alert("Trabajador no encontrado");
        } else {
          if (json["message"]["password"] == this.password) {
            alert("Bienvenido");
            this.router.navigate(['/workers']);
          } else {
            alert("Contraseña incorrecta");
          }
        }
      });
    } else if (this.role == "Cliente") {


      this.Api.GetClientById(this.id).toPromise().then((data) => {

        let json = JSON.parse(JSON.stringify(data));

        console.log(json);

        if (json["message"] == "client not registered") {
          alert("Usuario no encontrado");
        } else {
          if (json["message"]["password"] == this.password) {

            alert("Bienvenido");
            this.router.navigate(['/clients']);
          } else {
            console.log("contra ingresada: " + this.password + " contra en bd: " + json["message"]["password"]);
            alert("Contraseña incorrecta");
          }
        }


      });


    } else {
      alert("Invalid role");
    }

  }

}
