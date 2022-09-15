import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  url:string = "https://localhost:44349/Api/saveWorker";

  constructor(private http: HttpClient) { }

  public PostWorker(body:any){
    return this.http.post(this.url, body);
  }


}
