import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InicioComponent} from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { MisDatosComponent } from './components/mis-datos/mis-datos.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductosCategoriaComponent } from './components/productos-categoria/productos-categoria.component';
import { RegistroComponent } from './components/registro/registro.component';
import {AdminComponent} from './components/admin/admin.component';
import { NuevoProductoComponent } from './components/nuevo-producto/nuevo-producto.component';
import { EditarProductoComponent } from './components/editar-producto/editar-producto.component';
import { EliminarProductoComponent } from './components/eliminar-producto/eliminar-producto.component';



const routes: Routes = [
  {path: 'registro', component: RegistroComponent},
  {path: 'admin', component: LoginComponent},
  {path: 'admin/inicio', component: AdminComponent},
  {path: 'inicio', component:InicioComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'productos/:nombreCategoria', component: ProductosCategoriaComponent},
  {path: 'mis_datos', component: MisDatosComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin/nuevo_producto', component:NuevoProductoComponent},
  {path: 'admin/inicio/eliminar/:id', component:EliminarProductoComponent },
  {path: "", redirectTo:"inicio", pathMatch: 'full'},
  {path: 'admin/inicio/editar/:id', component: EditarProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
