import { ProvinciasService } from './../../services/provincias.service';
import { MpServiceService } from './../../services/mp-service.service';
import { Component, OnInit } from '@angular/core';
import { CarritoService } from './../../services/carrito.service';
import { iProductos, iItem } from './../../models/productos.model';
import {ElementRef} from '@angular/core'


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  items: Array<iItem>;
  itemsTotales:number = 0;
  precioTotal:number = 0;
  orden:any;
  provincias:any;
  localidades:any;
  constructor(private carritoService: CarritoService, private provinciasServices:ProvinciasService, private mpService:MpServiceService) { 
  }
  
  async ngOnInit(){
    this.obtenerProvincias();

    this.nuevoPago(this.items);

    this.carritoService.carrito$.subscribe(itemsCarrito => {
      if(itemsCarrito){
        this.items = itemsCarrito;
        this.itemsTotales = itemsCarrito.length;
        this.precioTotal = itemsCarrito.reduce((suma, itemCarrito) => suma + (itemCarrito.precio * itemCarrito.cantidad), 0)
      }
    })
  }
  async nuevoPago(items){
    this.orden = await this.mpService.nuevaOrden(items);
    let {preferenceId} = this.orden
    if (preferenceId) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
      script.dataset.preferenceId = preferenceId;
      let form = document.getElementById("boton-checkout")
      form.appendChild(script);
    }
  }

  async obtenerProvincias(){
    (await this.provinciasServices.obtenerProvincias()).subscribe((res:any) => {
      const data = res;
      this.provincias = data.provincias
      console.log(this.provincias)
    })
  }
  async traerLocalidades(event:any){
    let nombreProvincia:any = event.target.value
    console.log(nombreProvincia);
    (await this.provinciasServices.obtenerLocalidades(nombreProvincia)).subscribe((res:any) => {
      const data = res;
      this.localidades = data.localidades
    })
  }
}
