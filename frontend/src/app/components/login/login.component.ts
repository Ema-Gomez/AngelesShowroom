import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  nombreUsuario:string;
  password:string;

  constructor(private service: UsuariosService) { }

  ngOnInit(): void {
  }
  
  async login() {
    let usuario = {
      nombreUsuario: this.nombreUsuario,
      password: this.password
    }  
    let login:any = await this.service.login("login/in", usuario);

    console.log(usuario);
    
    return localStorage.setItem("authorization", login);
    
  }

  logout() {
    localStorage.removeItem("authorization");
  }
}
