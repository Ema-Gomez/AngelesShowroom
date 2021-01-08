import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import { CookieService } from 'ngx-cookie-service';
import { JwtModule } from "@auth0/angular-jwt";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductosComponent } from './components/productos/productos.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { MisDatosComponent } from './components/mis-datos/mis-datos.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { AdminComponent } from './components/admin/admin.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { IdAdminComponent } from './components/id-admin/id-admin.component';
import { NuevoProductoComponent } from './components/nuevo-producto/nuevo-producto.component';
import { HeaderComponent } from './components/header/header.component';

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
    RegistroComponent,
    MisDatosComponent,
    CategoriaComponent,
    AdminComponent,
    InicioComponent,
    IdAdminComponent,
    NuevoProductoComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
          allowedDomains: ['localhost:3000'],
          disallowedRoutes: [""],
          authScheme: ""
      }
    })
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
