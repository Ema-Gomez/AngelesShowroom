import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-productos-categoria',
  templateUrl: './productos-categoria.component.html',
  styleUrls: ['./productos-categoria.component.css']
})
export class ProductosCategoriaComponent implements OnInit {
  nombreCategoria:string;
  productos: any;

  constructor(private service: ProductosService, private route:ActivatedRoute) {
    this.nombreCategoria = this.route.snapshot.params.nombreCategoria
    console.log(this.nombreCategoria)
  }

  async ngOnInit() {
    this.obtenerProductos();
  }
   
  async obtenerProductos() {
    const productos:any = await this.service.obtenerProductos(`productos/${this.nombreCategoria}`);
    this.productos = productos;
    console.log(productos);
  }
}
