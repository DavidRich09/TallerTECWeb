import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes } from "@angular/router";
import {Pages2Module} from "./pages2.module";
import {Pages2Component} from "./pages2.component";
import {BillsComponent} from "./bills/bills.component";
import {Service2Component} from "./service2/service2.component";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  {path: 'clients', component: Pages2Component, children: [
      {path: 'bills', component: BillsComponent},
      {path: 'service2', component: Service2Component},
    ]
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Pages2Module,
    FormsModule,
    HttpClientModule,
  ],
  exports: [RouterModule]
})

export class Pages2RoutingModule { }
