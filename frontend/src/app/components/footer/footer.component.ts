import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  mostrar:boolean = true
  baseUrl = ["/login", "/admin","/registro", "/admin/inicio","/admin/productos"]
  activeUrl: string;

  constructor(private router:Router) { }

  ngOnInit(): void {
    if (isPlatformBrowser) {
      this.router.events
      .subscribe(() => {
          this.activeUrl = this.router.routerState.snapshot.url;
          this.ocultar(this.activeUrl);
      })
    }
  }

  ocultar (activeUrl) {
    if (this.baseUrl.includes(activeUrl)) {
      this.mostrar= false        
    }    
  } 
}