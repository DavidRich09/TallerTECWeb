import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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


  public PostClient(body:any){

    let urlClient = this.url + "Client/saveClient";

    return this.http.post(urlClient, body);
  }

  public PostCite(body:any){

    let urlCite = this.url + "Quote/saveQuote";

    return this.http.post(urlCite, body);
  }


}
