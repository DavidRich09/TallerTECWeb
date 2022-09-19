import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BillsComponent} from "./bills/bills.component";
import {Service2Component} from "./service2/service2.component";
import {SharedModule} from "../shared/shared.module";
import {Shared2Module} from "../shared2/shared2.module";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    BillsComponent,
    Service2Component,
  ],
  imports: [
    CommonModule,
    SharedModule,
    Shared2Module,
    FormsModule,
    HttpClientModule,
  ],
  exports: [
    BillsComponent,
    Service2Component,
  ]
})
export class Pages2Module { }
