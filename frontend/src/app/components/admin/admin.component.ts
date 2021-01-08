import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
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
