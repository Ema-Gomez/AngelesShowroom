import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  productos: any;
  categoria: string;
  constructor(private service: ProductosService, private activatedRoute: ActivatedRoute) {
    this.categoria = this.activatedRoute.snapshot.params.categoria
  }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  async obtenerProductos() {
    const productos:any = await this.service.obtenerProductos(`productos/${this.categoria}`);
    this.productos = productos;
    console.log(productos);
  }


}
