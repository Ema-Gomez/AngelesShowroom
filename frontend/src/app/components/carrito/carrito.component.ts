import { NavbarComponent } from './../navbar/navbar.component';
import { iProductos, iItem } from './../../models/productos.model';
import { CarritoService } from './../../services/carrito.service';
import { Component, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  
  items: Array<iItem>;
  itemsTotales:number = 0;
  precioTotal:number = 0;
  claseFondo:String;

  constructor(private carritoService: CarritoService, private nav:NavbarComponent) {
  }

  ngOnInit() {
    this.carritoService.carrito$.subscribe(itemsCarrito => {
      if(itemsCarrito){
        this.items = itemsCarrito;
        this.itemsTotales = itemsCarrito.length;
        this.precioTotal = itemsCarrito.reduce((suma, itemCarrito) => suma + (itemCarrito.precio * itemCarrito.cantidad), 0)
      }
    })
  }
  aumentarProducto(item:iItem){
    item.subtotal += item.precio
    item.cantidad += 1
    this.precioTotal = this.precioTotal + item.precio
  }
  disminuirProducto(item:iItem){
    if(item.cantidad !== 1){
      item.subtotal -= item.precio
      item.cantidad -= 1
      this.precioTotal = this.precioTotal - item.precio
    }
  }
  eliminarProducto(item:iItem){
    this.carritoService.eliminarProducto(item)

  }
  cerrarCarrito(){
    this.nav.cerrarCarrito()
  }


}
