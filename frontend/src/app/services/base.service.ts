import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class BaseService {
  
  constructor(private http: HttpClient) {}
  
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

  async delete(url:string) {
    try{
      return this.http.delete(`${environment.baseUrl}/${url}`).toPromise();
    } catch(e) {
    console.log(e);
    }  
  }
}
