import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ProductosService extends BaseService {
  async obtenerProductos(url:string) {
    return this.get(url)
  }

  async obtenerProducto(url:string){
    return this.get(url)
  }


}
