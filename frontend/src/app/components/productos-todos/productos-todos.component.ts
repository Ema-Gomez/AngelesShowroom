import { CarritoService } from './../../services/carrito.service';
import { Component, OnInit, HostListener } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { iProductos, iItem } from './../../models/productos.model';

@Component({
  selector: 'app-productos-todos',
  templateUrl: './productos-todos.component.html',
  styleUrls: ['./productos-todos.component.css']
})
export class ProductosTodosComponent implements OnInit {

  productos:iProductos;
  producto:iProductos;
  nombreCategoria:string;
  productoId:number;
 
  constructor(private service: ProductosService, private carritoService:CarritoService) {

   }

  async ngOnInit() {
    this.obtenerProductos()
  }

  async obtenerProductos() {                
    const productos:any = await this.service.obtenerProductos("productos/todos");
    console.log(productos);
    return this.productos = productos
  }

  agregarProducto(producto:iItem){
    this.carritoService.agregarAlCarrito(producto) 
  }
  
}
