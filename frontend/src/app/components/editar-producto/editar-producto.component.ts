import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {
  id:string = ""
  nombre:string = null
  descripcion:string = null
  precio:string = null
  talle:string = null
  color:string = null
  imagen:any
  
  constructor(private service:AdminService, private route:ActivatedRoute) {
    this.id = this.route.snapshot.params.id
    console.log(this.id)
  }

  ngOnInit() {

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

  async editarProductos() {
    const formData = new FormData();
      if(this.imagen !== undefined){
        formData.append("imagen", this.imagen)
        formData.append("nombre", this.nombre)
        formData.append("descripcion", this.descripcion)
        formData.append("precio", this.precio)
        formData.append("talle", this.talle)
        formData.append("color", this.color)
      } else {
        formData.append("nombre", this.nombre)
        formData.append("descripcion", this.descripcion)
        formData.append("precio", this.precio)
        formData.append("talle", this.talle)
        formData.append("color", this.color)
      }
      
    await this.service.editarProducto(`admin/productos/${this.id}/editar`, formData);     
  }

}
