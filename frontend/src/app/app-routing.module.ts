import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { LoginComponent } from './components/login/login.component';
import { MisDatosComponent } from './components/mis-datos/mis-datos.component';
import { ProductosComponent } from './components/productos/productos.component';
import { RegistroComponent } from './components/registro/registro.component';
import {AdminComponent} from './components/admin/admin.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'productos/:categoria', component: CategoriaComponent},
  {path: 'mis_datos', component: MisDatosComponent},
  {path: 'login', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
