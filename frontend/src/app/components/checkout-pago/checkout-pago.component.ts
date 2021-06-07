import { CheckoutFormComponent } from './../checkout-form/checkout-form.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-pago',
  templateUrl: './checkout-pago.component.html',
  styleUrls: ['./checkout-pago.component.css']
})
export class CheckoutPagoComponent implements OnInit {
  preferenceId:string;

  constructor(private form:CheckoutFormComponent){
  }

  async ngOnInit() {
    this.form.preferenceId = this.preferenceId
    this.nuevoPago();
  }

  async nuevoPago(){
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
      script.dataset.preferenceId = this.preferenceId;
      let form = document.getElementById("boton-checkout")
      form.appendChild(script);
    }
}
