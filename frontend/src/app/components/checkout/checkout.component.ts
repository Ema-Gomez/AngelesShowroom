import { iShipsments, iPayer, iItemMp } from './../../models/preference.model';
import { ProvinciasService } from './../../services/provincias.service';
import { MpServiceService } from './../../services/mp-service.service';
import { Component, OnInit } from '@angular/core';
import { CarritoService } from './../../services/carrito.service';
import { iItem } from './../../models/productos.model';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  itemsCarrito: Array<iItem>;
  itemsTotales:number = 0;
  precioTotal:number = 0;
  orden:any;
  provincias:any;
  localidades:any;
  preferenceId:string;
  item:iItemMp = {
    id:"",
    title:"",
    description:"",
    picture_url:"",
    category_id:"",
    quantity: 0,
    unit_price: 0
  }
  items:Array<iItemMp>;
  payer:iPayer = {
    name:"",
    surname:"",
    email:"",
    phone: {
        area_code:"",
        number:"",
    },
    identification:{
        type: "DNI", 
        number:"",
    },
    address:{
        zip_code:"",
        street_name:"",
        street_number:0,
    }
  };
  shipsments:iShipsments = {
    receiver_address:{
      zip_code:"",
      state_name:"",
      city_name:"",
      street_name:"",
      street_number:0,
      floor:"",
      apartment:""
    } 
  };

  constructor(private carritoService: CarritoService, private provinciasServices:ProvinciasService, private mpService:MpServiceService) { 
  }
  
  async ngOnInit(){
    
  }
}
