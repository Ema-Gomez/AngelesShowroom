import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  productos:any;
  
  closeResult = '';
  

  constructor(private service: AdminService, private modalService: NgbModal) { }

  async ngOnInit() {
    this.traerProductos();
  }

  async traerProductos() {
    const productos:any = await this.service.adminProductos("admin/productos");
    this.productos = productos;
    console.log(productos);
  }
}

