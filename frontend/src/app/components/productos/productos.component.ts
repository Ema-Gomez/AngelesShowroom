import { CarritoService } from './../../services/carrito.service';
import { Component, OnInit, Input } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { iProductos, iItem } from './../../models/productos.model';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})



export class ProductosComponent implements OnInit {
  productos:iProductos;
  producto:iProductos;
  nombreCategoria:string;
  productoId:number;
  

  constructor(private service: ProductosService, private carritoService:CarritoService) {

   }

  async ngOnInit() {
  }

  

}