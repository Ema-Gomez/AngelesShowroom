import { iProductos, iItem } from './../models/productos.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CarritoService {
  private carrito = new BehaviorSubject<Array<iItem>>(undefined);
  public carrito$ = this.carrito.asObservable(); 
  constructor() {
    
  }

  agregarAlCarrito(producto:iItem){
    let items = this.carrito.getValue();
    if (items) {
      let buscarProducto = items.findIndex((obj => obj.idProducto == producto.idProducto))
      if(buscarProducto != -1) {
        items[buscarProducto].cantidad += 1
        items[buscarProducto].subtotal = items[buscarProducto].precio * items[buscarProducto].cantidad
      } else {
        producto.cantidad = 1
        producto.subtotal = producto.precio * producto.cantidad
        items.push(producto);
      }
    } else {
      items = []
      producto.cantidad = 1
      producto.subtotal = producto.precio * producto.cantidad
      items.push(producto)
      console.log("Producto agregado", items)
    }
    this.carrito.next(items)
  
  };

  eliminarProducto(producto:iItem){
    let items = this.carrito.getValue();
    let buscarProducto = items.findIndex((obj => obj.idProducto == producto.idProducto));
    if(buscarProducto != -1) {
      items[buscarProducto].cantidad = 1
      items.splice(buscarProducto,1)
    }
    this.carrito.next(items)
  }
}
