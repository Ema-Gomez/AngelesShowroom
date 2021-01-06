import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InicioComponent} from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { MisDatosComponent } from './components/mis-datos/mis-datos.component';
import { ProductosComponent } from './components/productos/productos.component';
import { RegistroComponent } from './components/registro/registro.component';
import {AdminComponent} from './components/admin/admin.component';
import { IdAdminComponent } from './components/id-admin/id-admin.component';
import { NuevoProductoComponent } from './components/nuevo-producto/nuevo-producto.component';

const routes: Routes = [
  {path: 'registro', component: RegistroComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'inicio', component:InicioComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'mis_datos', component: MisDatosComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin/nuevo_producto', component:NuevoProductoComponent},
  {path: 'admin/eliminar/:id', component:IdAdminComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
