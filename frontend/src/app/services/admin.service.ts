import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService extends BaseService{

  async adminProductos(url:string) {
    return this.get(url)
  }
}
