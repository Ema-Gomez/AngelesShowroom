import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(private service: ProductosService) {

   }

  async ngOnInit() {
    const productos = await this.service.getAll('http://localhost:3000/productos/todos');
    console.log(productos);
  }
}