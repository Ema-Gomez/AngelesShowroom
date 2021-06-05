import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  mostrar:boolean = true
  baseUrl = ["/login", "/admin","/registro","/admin/inicio","/admin/productos", "/checkout"]
  activeUrl: string;
  
  
  constructor(private router:Router){
    
  }
  
  ngOnInit(): void {
    if (isPlatformBrowser) {
      this.router.events
      .subscribe(() => {
          this.activeUrl = this.router.routerState.snapshot.url;
          this.ocultar(this.activeUrl);
          console.log(this.activeUrl)
        })
    }
  }

  ocultar (activeUrl:string) {
    if (this.baseUrl.includes(activeUrl)) {
      this.mostrar= false        
    }    
  } 
}

