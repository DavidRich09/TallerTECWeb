import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

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

  constructor(private router : Router ) { }

  ngOnInit(): void {
  }

  Register() {
    this.router.navigate(['/login']);
  }

}
