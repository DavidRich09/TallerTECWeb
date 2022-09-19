import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, RouterOutlet } from '@angular/router';
import { BillingComponent } from "./billing/billing.component";
import { CiteComponent } from "./cite/cite.component";
import { ClientComponent } from "./client/client.component";
import { WorkerComponent } from "./worker/worker.component";
import { ReportComponent} from "./reports/report.component";
import { SharedModule } from "../shared/shared.module";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    BillingComponent,
    CiteComponent,
    ClientComponent,
    WorkerComponent,
    ReportComponent
  ],
  exports: [
    BillingComponent,
    CiteComponent,
    ClientComponent,
    WorkerComponent,
    ReportComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class PagesModule { }
