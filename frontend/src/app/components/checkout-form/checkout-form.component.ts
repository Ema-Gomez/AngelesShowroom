import { Component, OnInit } from '@angular/core';
import { iShipsments, iPayer, iItemMp } from './../../models/preference.model';
import { ProvinciasService } from './../../services/provincias.service';
import { MpServiceService } from './../../services/mp-service.service';
import { CarritoService } from './../../services/carrito.service';
import { iItem } from './../../models/productos.model';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})

export class CheckoutFormComponent implements OnInit {
  
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
    this.obtenerProvincias();
    this.carritoService.carrito$.subscribe(itemsCarrito => {
      if(itemsCarrito){
        this.itemsCarrito = itemsCarrito;
        this.itemsTotales = itemsCarrito.length;
        this.precioTotal = itemsCarrito.reduce((suma, itemCarrito) => suma + (itemCarrito.precio * itemCarrito.cantidad), 0)
      }
    })
  }

  

  async crearPreferencia(){
    this.items = []
    for(let i=0;i<this.itemsCarrito.length;i++){   
      let item ={  
        id:this.itemsCarrito[i].idProducto,
        title:this.itemsCarrito[i].nombre,
        description:this.itemsCarrito[i].descripcion,
        picture_url:this.itemsCarrito[i].imagen,
        category_id:this.itemsCarrito[i].idCategorias,
        quantity: this.itemsCarrito[i].cantidad,
        unit_price:this.itemsCarrito[i].precio
      }
      this.items.push(item)
    }
    const preference = {
      items: this.items,
      payer: this.payer,
      shipsments: this.shipsments
    }
    console.log(preference)
    this.orden = await this.mpService.nuevaOrden(preference);
    let {preferenceId} = this.orden
    this.preferenceId = preferenceId
  }

  async obtenerProvincias(){
    (await this.provinciasServices.obtenerProvincias()).subscribe((res:any) => {
      const data = res;
      this.provincias = data.provincias
    })
  }

  async traerLocalidades(event:any){
    let nombreProvincia:any = event.target.value
    console.log(nombreProvincia);
    (await this.provinciasServices.obtenerLocalidades(nombreProvincia)).subscribe((res:any) => {
      const data = res;
      this.localidades = data.localidades
    })
  }
}
