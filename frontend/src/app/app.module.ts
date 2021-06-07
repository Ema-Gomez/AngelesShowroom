import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import { JwtModule } from "@auth0/angular-jwt";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import  {  NgxMercadopagoModule  }  from  'ngx-mercadopago'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductosComponent } from './components/productos/productos.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NuevoProductoComponent } from './components/nuevo-producto/nuevo-producto.component';
import { HeaderComponent } from './components/header/header.component';
import { EditarProductoComponent } from './components/editar-producto/editar-producto.component';
import { AdminNavComponent } from './components/admin-nav/admin-nav.component';
import { ProductoComponent } from './components/producto/producto.component';
import {EliminarProductoComponent} from './components/eliminar-producto/eliminar-producto.component';
import { ProductosCategoriaComponent } from './components/productos-categoria/productos-categoria.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { AdminProductosComponent } from './components/admin-productos/admin-productos.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { ProductosTodosComponent } from './components/productos-todos/productos-todos.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CheckoutFormComponent } from './components/checkout-form/checkout-form.component';
import { CheckoutPagoComponent } from './components/checkout-pago/checkout-pago.component';



export function tokenGetter() {
  return localStorage.getItem("authorization")
}
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ProductosComponent,
    LoginComponent,
    AdminComponent,
    InicioComponent,
    NuevoProductoComponent,
    HeaderComponent,
    EditarProductoComponent,
    AdminNavComponent,
    ProductoComponent,
    EliminarProductoComponent,
    ProductosCategoriaComponent,
    CarritoComponent,
    AdminProductosComponent,
    AdminLoginComponent,
    ProductosTodosComponent,
    CheckoutComponent,
    CheckoutFormComponent,
    CheckoutPagoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
          allowedDomains: ['localhost:3000'],
          disallowedRoutes: [""],
          authScheme: ""
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
