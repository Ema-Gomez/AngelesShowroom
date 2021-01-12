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
    if(token){
      window.location.href = '/admin'
    } else {
      window.location.href = '/registro'
    }
    
    return localStorage.setItem("authorization", token);      
  }

  
}



