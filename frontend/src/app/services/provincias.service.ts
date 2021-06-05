import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProvinciasService{
  constructor(private http: HttpClient) {}
  async obtenerProvincias(){
    return this.http.get('https://apis.datos.gob.ar/georef/api/provincias')
  }

  async obtenerLocalidades(nombreProvincia:string){
  return this.http.get(`https://apis.datos.gob.ar/georef/api/localidades?provincia=${nombreProvincia}&max=100`)
  }
}
