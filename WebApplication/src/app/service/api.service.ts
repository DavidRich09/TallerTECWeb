import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  url:string = "http://localhost:9968/";

  constructor(private http: HttpClient) { }

  public PostWorker(body:any){

    let urlTrue = this.url + "Api/saveWorker";

    return this.http.post(urlTrue, body);
  }


  public PostCite(body:any){

    let urlCite = this.url + "Quote/saveQuote";

    return this.http.post(urlCite, body);
  }

  public ClientReport(){
    let urlReportC = this.url + "Report/ClientReport"
    return this.http.get(urlReportC);
  }

  public LicReport(){
    let urlReportL = this.url + "Report/LicReport"
    return this.http.get(urlReportL);
  }


  public  PostClient(body:any){

    let urlTrue = this.url + "Client/saveClientClient";

    return this.http.post(urlTrue, body);

  }

  public GetClientById(id : string){

    let urlTrue = this.url + "Client/requestClient/" + id;

    return this.http.get(urlTrue);

  }

  public GetWorkerById(id : string){

      let urlTrue = this.url + "Api/requestWorker/" + id;

      return this.http.get(urlTrue);

  }

}
