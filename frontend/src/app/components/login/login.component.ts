import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  nombreUsuario:string;
  password:string;

  constructor(private service: UsuariosService, private route:Router ) { }

  ngOnInit(): void {
  }
  
  async login() {
    let usuario = {
      nombreUsuario: this.nombreUsuario,
      password: this.password
    }  
    let token:any = await this.service.login("login/in", usuario);    
    console.log(token);
    if(token !=="undefined"){
      window.location.href = '/inicio'
    } else{
      console.log('no puede pasa')
      document.write("<p>Usuario y/o password incorecto</p>")
    }
    
    return localStorage.setItem("authorization", token);
    
  }
}
