import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent implements OnInit {

  role: any;
  email: any;
  password: any;

  constructor( private router: Router ) { }


  ngOnInit(): void {
  }

  onLogin() {
    console.log("login");
    console.log("role "+ this.role);
    console.log("email "+ this.email);

    if (this.role == "Worker") {
      this.router.navigate(['/workers']);
    }
    else if (this.role == "Client") {
      this.router.navigate(['/clients']);
    } else {
      alert("Invalid role");
    }

  }

}
