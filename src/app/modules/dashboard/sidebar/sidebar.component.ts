import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/inicio',     title: 'Inicio',      icon:'nc-shop',         class: '' },
  { path: '/productos',  title: 'Productos',   icon:'nc-app',          class: '' },
  { path: '/materiales', title: 'Materiales',  icon:'nc-box',          class: '' },
  { path: '/clientes',   title: 'Clientes',    icon:'nc-circle-10',    class: '' },
  { path: '/ventas',     title: 'Ventas',      icon:'nc-money-coins',  class: '' },
  { path: '/compras',    title: 'Compras',     icon:'nc-cart-simple',  class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];

  constructor(private router: Router) {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  ngOnInit(): void {
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/auth/login']);
  }

}
