import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private http: HttpClient) {}

  async get(url:string) {
    try{
      baseUrl:string;
      return this.http.get(url).toPromise()
    } catch(e) {
    console.log(e);
    }
  }

  async post(url:string, obj:any){
    try{
      return this.http.post(url, obj).toPromise();
    }
  }
}
