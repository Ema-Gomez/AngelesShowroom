import { MpServiceService } from './../../services/mp-service.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-checkout-pago',
  templateUrl: './checkout-pago.component.html',
  styleUrls: ['./checkout-pago.component.css']
})
export class CheckoutPagoComponent implements OnInit {
  @Input()
  preferenceId:string;

  constructor(private mpService:MpServiceService){
  }
  ngOnChanges(){
    console.log("hubo un cambio")
    this.nuevoPago(this.preferenceId)
  }
  ngOnInit() {
  }

  nuevoPago(preferenceId){
    if(preferenceId){
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
      script.dataset.preferenceId = preferenceId;
      let form = document.getElementById("boton-checkout")
      form.appendChild(script);
    }
  }
}
