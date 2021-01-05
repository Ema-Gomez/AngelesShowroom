import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})

export class BaseService {
  
  constructor(private http: HttpClient, private cookies: CookieService) {}

  async get(url:string) {
    try{
      return this.http.get(`${environment.baseUrl}/${url}`).toPromise()   
    } catch(e) {
      console.log(`Error: ${e}`);
    }
  }
  
  async post(url:string, obj:any) {
    try{
      return this.http.post(`${environment.baseUrl}/${url}`, obj).toPromise(); 
    } catch(e){
      console.log(e)
    }
  }
  
  async put(url:string, obj:any){
    try{
      return this.http.put(`${environment.baseUrl}/${url}`, obj).toPromise();
    } catch (e) {
      console.log(e);
    }
  }

  setToken(token: string) {
    this.cookies.set("authorization", token);
  }
  getToken() {
    return this.cookies.get("authorization");
  }
  
}

