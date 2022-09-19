import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent implements OnInit {

  role: any;
  email: any;
  password: any;

  constructor() { }


  ngOnInit(): void {
  }

  onLogin() {
    console.log("login");
    console.log("role "+ this.role);
    console.log("email "+ this.email);

  }

}
