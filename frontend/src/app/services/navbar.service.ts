import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class NavbarService extends BaseService{

  async traerCategorias (url:string) {
    return this.get(url)
  }
}
