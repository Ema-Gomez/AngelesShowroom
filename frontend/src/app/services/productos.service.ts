import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ProductosService extends BaseService {
  getAll(url:string) {
    return this.get(url)
  }
}
