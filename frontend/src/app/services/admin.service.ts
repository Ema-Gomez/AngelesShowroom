import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService extends BaseService{

  async adminProductos(url:string) {
    return this.get(url)
  }

  async nuevoProducto(url:string, obj:any) {
    return this.post(url, obj);
  }

  async editarProducto(url:string, obj:any) {
    return this.put(url,obj);
  }

  async eliminarProductos(url:string, id:any) {
    return this.delete(url);
  }

  async traerCategorias (url:string) {
    return this.get(url)
  }
}
