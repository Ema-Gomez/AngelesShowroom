import { Component, OnInit, ResolvedReflectiveFactory } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { iProductos } from './../../models/productos.model';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements OnInit {
  categorias:any

  idCategorias:any
  nombre:string
  descripcion:string
  precio:string
  talle:string
  color:string
  imagen:any
  
  constructor(private service:AdminService) { }

  async ngOnInit() {
    this.traerCateg();

  }
  
  async traerCateg() {
    const categoria:any = await this.service.traerCategorias('categorias')
    this.categorias= categoria;
    console.log(categoria);
  }

  seleccionarImagen(event) {
    if(event.target.files.lenght != 0) {
      const file = event.target.files[0];
      this.imagen = file
      console.log(this.imagen)
    } else {
      console.log("error pa!")
    }

  }

  obtenerValue(event) {
    const id = event.target.value 
    this.idCategorias = id
  }

  async nuevoProducto() {     
     const formData = new FormData();
     formData.append("imagen", this.imagen)
     formData.append("idCategorias", this.idCategorias)
     formData.append("nombre", this.nombre)
     formData.append("descripcion", this.descripcion)
     formData.append("precio", this.precio)
     formData.append("talle", this.talle)
     formData.append("color", this.color)
     
     const nuevo = await this.service.nuevoProducto("admin/productos/crear", formData)

     window.location.href = "/admin/inicio"
     
    }
}

