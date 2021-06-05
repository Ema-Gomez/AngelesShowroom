import { CarritoService } from './../../services/carrito.service';
import { iProductos, iItem } from './../../models/productos.model';
import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-productos-categoria',
  templateUrl: './productos-categoria.component.html',
  styleUrls: ['./productos-categoria.component.css']
})
export class ProductosCategoriaComponent implements OnInit {
  nombreCategoria:string;
  productos:iProductos;

  constructor(private service: ProductosService, private route:ActivatedRoute, private carritoService:CarritoService) {
  }
  
  async ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap) => {
    this.nombreCategoria = params.get('nombreCategoria');
    console.log(this.nombreCategoria)
    this.obtenerProductos()
    })
  }
   
  async obtenerProductos() {
    const productos:any = await this.service.obtenerProductos(`productos/${this.nombreCategoria}`);
    this.productos = productos;
    console.log(productos);
  }
  agregarProducto(producto:iItem){
    this.carritoService.agregarAlCarrito(producto) 
  }
}
