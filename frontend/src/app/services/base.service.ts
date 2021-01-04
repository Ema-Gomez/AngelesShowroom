import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private http: HttpClient) {}

  async get(url:string) {
    try{
      return this.http.get(url).toPromise()
    } catch(e) {
    console.log(e);
    }
  }

  async post(url:string, obj:any){
    try{
      return this.http.post(url, obj).toPromise();
    } catch (e) {
      console.log(e);
    }
  }
}
