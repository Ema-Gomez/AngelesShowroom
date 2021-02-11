import { Component, OnInit, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})

export class NavComponent implements OnInit {

  constructor(private renderer:Renderer2) { }

  ngOnInit(): void {
  }

  abrirNav(){
    document.getElementById('nav').classList.toggle("open")
    document.getElementById('fondo').classList.toggle('oscuro')
  }
  cerrarNav(){
    document.getElementById('nav').classList.remove('open')
    document.getElementById('fondo').classList.remove('oscuro')
    
  }

}
