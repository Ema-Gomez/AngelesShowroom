import { CheckoutPagoComponent } from './components/checkout-pago/checkout-pago.component';
import { CheckoutFormComponent } from './components/checkout-form/checkout-form.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ProductosTodosComponent } from './components/productos-todos/productos-todos.component';
import { ProductoComponent } from './components/producto/producto.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AutorizacionGuard } from './guards/autorizacion.guard';
import { AdminProductosComponent } from './components/admin-productos/admin-productos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InicioComponent} from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductosCategoriaComponent } from './components/productos-categoria/productos-categoria.component';
import {AdminComponent} from './components/admin/admin.component';
import { NuevoProductoComponent } from './components/nuevo-producto/nuevo-producto.component';
import { EditarProductoComponent } from './components/editar-producto/editar-producto.component';
import { EliminarProductoComponent } from './components/eliminar-producto/eliminar-producto.component';




const routes: Routes = [
  {path: 'admin', component: AdminLoginComponent}, 
  {path:'admin/panel', canActivate: [AutorizacionGuard], component: AdminComponent,
    children: [
      {path: 'nuevo', component:NuevoProductoComponent},
      {path: 'productos', component: AdminProductosComponent},
      {path: 'productos/editar/:id', component: EditarProductoComponent},
      {path: 'productos/eliminar/:id', component:EliminarProductoComponent},
    ]
  },
  {path: 'inicio', component:InicioComponent},
  {path: 'productos', component: ProductosComponent,
    children:[
      {path: 'todos', component: ProductosTodosComponent},
      {path: 'todos/:nombreCategoria/:idProducto', component:ProductoComponent},
      {path: ':nombreCategoria', component: ProductosCategoriaComponent},
      {path: ':nombreCategoria/:idProducto', component: ProductoComponent}
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: "", redirectTo:"inicio", pathMatch: 'full'},
  {path:"checkout", component: CheckoutComponent,
    children: [
      {path: 'datos_pago', component:CheckoutFormComponent},
      {path: 'finalizar', component:CheckoutPagoComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
