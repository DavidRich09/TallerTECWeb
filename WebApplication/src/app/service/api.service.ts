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

}
