import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-productos',
  templateUrl: './admin-productos.component.html',
  styleUrls: ['./admin-productos.component.css']
})
export class AdminProductosComponent implements OnInit {
  productos:any;

  constructor(private service: AdminService) { }

  async ngOnInit() {
    this.traerProductos();
  }

  async traerProductos() {
    const productos:any = await this.service.adminProductos("admin/productos");
    this.productos = productos;
    console.log(productos);
  }
}
