import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, children: [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'inicio', component: HomeComponent },
    { path: 'productos', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
    { path: 'materiales', loadChildren: () => import('./materials/materials.module').then(m => m.MaterialsModule) },
    { path: 'clientes', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
    { path: 'ventas', loadChildren: () => import('./sales/sales.module').then(m => m.SalesModule) },
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
