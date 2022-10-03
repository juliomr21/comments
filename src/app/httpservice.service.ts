import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import * as data from '../assets/data.json';
//import data from '../assets/users.json';
@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(private http:HttpClient) { }
  getJson(){
    return this.http.get("assets/users.json");
  }
  posJson(){
    this.http.post("assets/user.json",{nombre: "Julio", Apellido: " Moreno"});
  }
  get(miUrl:string){
    return this.http.get(miUrl);
  }
  pos(miUrl:string,body:any){
    this.http.post(miUrl,body);
  }
}
