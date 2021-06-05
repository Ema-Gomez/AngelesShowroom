import { iItem } from './../models/productos.model';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class MpServiceService extends BaseService{
  
  async nuevaOrden(items:Array<iItem>){
   return this.post("pagos/nuevo", items );
  }

}
