import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class MpServiceService extends BaseService{
  async nuevaOrden(preference){
    return await this.post("pagos/nuevo", preference )
   
  }
}
