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
import { EditarProductoComponent } from './components/editar-producto/editar-producto.component';



const routes: Routes = [
  {path: 'registro', component: RegistroComponent},
  {path: 'admin', component: LoginComponent},
  {path: 'admin/inicio', component: AdminComponent},
  {path: 'inicio', component:InicioComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'mis_datos', component: MisDatosComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin/nuevo_producto', component:NuevoProductoComponent},
  {path: 'admin/eliminar/:id', component:IdAdminComponent},
  {path: "", redirectTo:"inicio", pathMatch: 'full'},
  {path: 'admin/editar/:id', component: EditarProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
