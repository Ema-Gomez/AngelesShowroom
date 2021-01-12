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
  baseUrl = ["/login", "/admin","/registro","/admin/nuevo_producto"]
  activeUrl: string;
  
  
  constructor(private router:Router){
    
  }
  
  ngOnInit(): void {
    if (isPlatformBrowser) {
      this.router.events
      .subscribe(() => {
          this.activeUrl = this.router.routerState.snapshot.url;
          console.log(this.activeUrl)
          this.ocultar(this.activeUrl);
      })
    }
  }

  ocultar (activeUrl) {
    this.baseUrl.forEach(value =>{
      if (activeUrl === value) {
        console.log(activeUrl) 
        this.mostrar= false        
      } else {
        console.log("Header permitido!")
      }      
    }) 
  }
}
