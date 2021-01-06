import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements OnInit {
  categorias:any

  idCAtegorias:string
  nombre:string
  descripcion:string
  precio:number
  talle:string
  color:string
  imagen:string
  
  constructor(private service:AdminService) { }

  async ngOnInit() {
    this.traerCateg();

  }
  
  async traerCateg() {
    const categoria:any = await this.service.traerCategorias('categorias')
    this.categorias= categoria;
    console.log(categoria);
  }

  async nuevoProducto() {
    let producto = {
      idCategorias: this.idCAtegorias,
      nombre: this.nombre,
      descripcion: this.descripcion,
      precio: this.precio,
      talle: this.talle,
      color: this.color,
      imagen: this.imagen
    }
    
    const nuevo = await this.service.nuevoProducto("admin/productos/crear", producto)
    console.log(producto);
    return nuevo;
  }
}
