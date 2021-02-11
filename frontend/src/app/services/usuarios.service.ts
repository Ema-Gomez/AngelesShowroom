import { Injectable } from '@angular/core';
import { BaseService } from './base.service';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService extends BaseService{
  
  
  async registrar(url:string, obj:any) {
    return this.post(url, obj)
  }

  async login(url:string, obj:any) {
    try{
      return this.post(url, obj)
    } catch {
      console.log("error en service")
    }
  }
  
  async actualizarDatos(url:string, obj:any) {
    return this.put(url, obj)
  }
}

