import { AutorizacionGuard } from './../../guards/autorizacion.guard';
import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Router, ActivatedRoute, RouterStateSnapshot } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  nombreUsuario:string;
  password:string;


  constructor(
    private service: UsuariosService,
    private route:ActivatedRoute, 
    private router: Router, 
    private guard:AutorizacionGuard
    ) {}

  ngOnInit(): void {
  }
  
  async login() {
    let usuario = {
      nombreUsuario: this.nombreUsuario,
      password: this.password
    }  
    let dataUsuario:any = await this.service.login("login/in", usuario);
    console.log(dataUsuario)
    this.guard.canActivate(this.route.snapshot, this.router.routerState.snapshot)
  }

  
}



