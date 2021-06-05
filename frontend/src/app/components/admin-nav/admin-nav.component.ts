import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent implements OnInit {
  claseNav:string;
  claseFondo:String;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  
  salir() {
    localStorage.removeItem("authorization");
    this.router.navigate(['/admin'])
  } 

  abrirNav(){
    this.claseNav = "open"
    this.claseFondo = "oscuro"
  }
  cerrarNav(){
    this.claseNav = ""
    this.claseFondo = ""  
  }

}
