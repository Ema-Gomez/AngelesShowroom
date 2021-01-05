import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: any
  constructor(private service: ProductosService) {

   }

  async ngOnInit() {
    this.obtenerProductos()
  }

  async obtenerProductos() {
    const productos:any = await this.service.obtenerProductos("productos/todos");
    this.productos = productos;
    console.log(productos);
  }

}