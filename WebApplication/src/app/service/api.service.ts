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

  /**
   * Metodo para realizar el POST de las citas nuevas
   * @param body informacion de la cita
   */
  public PostCite(body:any){

    let urlCite = this.url + "Quote/saveQuote";

    return this.http.post(urlCite, body);
  }

  /**
   * Metodo para ejecutar el reporte de los clientes que registran mas visitas
   */
  public ClientReport(){
    let urlReportC = this.url + "Report/ClientReport"
    return this.http.get(urlReportC);
  }

  /**
   * Metodo para ejecutar el reporte de los vehiculos que registran mas visitas
   */
  public LicReport(){
    let urlReportL = this.url + "Report/LicReport"
    return this.http.get(urlReportL);
  }

  /**
   * Metodo para realizar el POST de los clientes nuevos
   * @param body informacion de la cita
   */
  public  PostClient(body:any){

    let urlTrue = this.url + "Client/saveClientClient";

    return this.http.post(urlTrue, body);

  }

  /**
   * Get de cliente por id
   * @param id
   * @constructor
   */

  public GetClientById(id : string){

    let urlTrue = this.url + "Client/requestClient/" + id;

    return this.http.get(urlTrue);

  }

  /**
   * Metodo para realizar un get de un trabajador
   * @param id
   * @constructor
   */

  public GetWorkerById(id : string){

      let urlTrue = this.url + "Api/requestWorker/" + id;

      return this.http.get(urlTrue);

  }

  /**
   * metodo para realizar un get de un trabajador random
   * @constructor
   */

  public GetRandomWorker(){
    let urlTrue = this.url + "Api/requestWorkerR";
    return this.http.get(urlTrue);
  }

  /**
   * Metodo para realizar un get para generar reporte de citas
   * @param licensePlate
   * @param date
   * @param service
   * @constructor
   */

  public GenerateBill(licensePlate: string, date: string, service: string){
    date = date.replace("/","%2F");
    date = date.replace("/","%2F");
    let urlTrue = this.url + "Report/QuoteReport/" + licensePlate + "/" + date + "/" + service;
    return this.http.get(urlTrue);
  }

  /**
   * Metodo para realizar un get para generar el reporte de las oficinas
   * @param startDate
   * @param finalDate
   * @constructor
   */

  public GenerateOfficeReport(startDate:string, finalDate:string){
    startDate = startDate.replace("/","%2F");
    startDate = startDate.replace("/","%2F");
    finalDate = finalDate.replace("/","%2F");
    finalDate = finalDate.replace("/","%2F");

    let urlTrue = this.url + "Report/OfiiceReport/" + startDate + "/" + finalDate;

    return this.http.get(urlTrue);
  }

}
