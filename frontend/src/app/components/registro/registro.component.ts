import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  nombre:string;
  apellido:string;
  email:string;
  telefono:string;
  nombreUsuario:string;
  password:string;

  constructor(private service: UsuariosService) { }

  ngOnInit(): void {
  }
  
  async registro() {
    let usuario = {
      nombre: this.nombre,
      apellido: this.apellido,
      email: this.email,
      telefono: this.telefono,
      nombreUsuario: this.nombreUsuario,
      password: this.password
    }  
    const login:any = await this.service.registrar("registro/crear", usuario)
    
  }
}
