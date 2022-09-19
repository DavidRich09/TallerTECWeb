import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from "./pages.component";
import { BillingComponent } from "./billing/billing.component";
import { CiteComponent } from "./cite/cite.component";
import { ClientComponent } from "./client/client.component";
import { WorkerComponent } from "./worker/worker.component";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { SharedModule } from "../shared/shared.module";
import {PagesModule} from "./pages.module";

const routes: Routes = [
  { path: 'workers', component: PagesComponent, children: [
      {path : 'worker', component: WorkerComponent},
      {path : "client", component: ClientComponent},
      {path : "cite", component: CiteComponent},
      {path : "billing", component: BillingComponent},
    ]
  }
];

@NgModule({
  declarations: [

  ],
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    HttpClientModule,
    SharedModule,
    PagesModule

  ],
  exports: [RouterModule,
    ]
})
export class PagesRoutingModule { }
