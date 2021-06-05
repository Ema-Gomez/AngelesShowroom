import { AutorizacionGuard } from './../../guards/autorizacion.guard';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  nombreUsuario:string;
  password:string;

  constructor(private service: UsuariosService,
    private route:ActivatedRoute, 
    private router: Router, 
    private guard:AutorizacionGuard) { }

  ngOnInit(): void {
  }

  async login() {
    let usuario = {
      nombreUsuario: this.nombreUsuario,
      password: this.password
    }  
    let {admin, authorization}:any = await this.service.login("login/in", usuario);

    if(admin == 1){
      localStorage.setItem("authorization", authorization)
      this.router.navigate(['/admin/panel'])
    } else {
     this.router.navigate(['/registro'])
    } 
  }
}
