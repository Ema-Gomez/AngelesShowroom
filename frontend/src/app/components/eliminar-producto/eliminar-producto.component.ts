import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-eliminar-producto',
  templateUrl: './eliminar-producto.component.html',
  styleUrls: ['./eliminar-producto.component.css']
})
export class EliminarProductoComponent implements OnInit {
  id:string = "";
  constructor(private service:AdminService, private route:ActivatedRoute) {
    this.id = this.route.snapshot.params.id
    console.log(this.id)
  }

  async ngOnInit() {
    this.eliminarProductos();
  }

  
  async eliminarProductos() {
    await this.service.delete(`admin/productos/${this.id}/eliminar`);
    window.location.href = '/admin/inicio'  
  }

}
