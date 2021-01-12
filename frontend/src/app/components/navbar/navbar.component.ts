import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  categorias: any
  constructor(private service:NavbarService) { 

  }

  ngOnInit() {
  }

  logout() {
    localStorage.removeItem("authorization");
  }
}
