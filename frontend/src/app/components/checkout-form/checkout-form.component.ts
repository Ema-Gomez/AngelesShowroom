import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  @Output()
  stringPref:EventEmitter<string> = new EventEmitter<string>(true);
  itemsCarrito: Array<iItem>;
  itemsTotales:number = 0;
  precioTotal:number = 0;
  orden:any;
  provincias:any;
  localidades:any;
  
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
        street_number:"",
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

    let numberPhone = parseInt(this.payer.phone.number)
    this.payer.phone.number = numberPhone;
    let streetNumber = parseInt(this.payer.address.street_number)
    this.payer.address.street_number = streetNumber
    this.shipsments.receiver_address.zip_code = this.payer.address.zip_code;
    this.shipsments.receiver_address.street_name = this.payer.address.street_name;
    this.shipsments.receiver_address.street_number = this.payer.address.street_number;

    const preference = {
      items: this.items,
      payer: this.payer,
      shipments: this.shipsments
    }
    console.log(preference)
    
    let orden:any = await this.mpService.nuevaOrden(preference);
    console.log(orden);
    let {preferenceId} = orden;
    this.stringPref.emit(preferenceId)
  }
  mandarPref(){
    let preferenceId = "akasdkj8whd8w0"
    this.stringPref.emit(preferenceId)
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
