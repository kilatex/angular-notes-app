import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lateral-menu',
  templateUrl: './lateral-menu.component.html',
  styleUrls: ['./lateral-menu.component.css']
})
export class LateralMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  hideMenu() :void{
 
     const menu = document.getElementById('menu'); 
      menu?.classList.remove('active'); 
  }
}
