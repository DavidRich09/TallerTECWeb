import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ApiService } from "../../service/api.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: []
})
export class RegisterComponent implements OnInit {

  id : any;
  name : any;
  user : any;
  email : any;
  password : any;

  constructor(private router : Router, private Api : ApiService ) { }

  ngOnInit(): void {
  }

  Register() {

    if (this.id == "" || this.name == "" || this.user == "" || this.email == "" || this.password == "") {
      alert("Todos los campos son obligatorios");
    } else {
      if (isNaN(this.id)) {
        alert("La cedula solo puede contener numeros");
      } else {
        this.Api.PostClient({
          id : this.id,
          name : this.name,
          user : this.user,
          email : this.email,
          password : this.password,
          address : [{
            clientId : this.id,
            nstreet : "",
            province : "",
            district : "",
            canton : "",
          }],
          phone : [{
            clientId : this.id,
            phone : ""
          }]
        }).subscribe((data) => {

          let json = JSON.parse(JSON.stringify(data));

          console.log(json);

          if (json["message"] == "client repeated") {
            alert("Usuario repetido");
          } else {
            alert("Usuario Registrado Exitosamente");
            this.router.navigate(['/login']);
          }

        });
      }
    }

  }

  Back() {
    this.router.navigate(['/login']);
  }

}
