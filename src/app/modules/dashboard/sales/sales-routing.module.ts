import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ModifyComponent } from './modify/modify.component';
import { SalesComponent } from './sales.component';

const routes: Routes = [
  { path: '', component: SalesComponent },
  { path: 'agregar', component: CreateComponent },
  { path: 'modificar/:id', component: ModifyComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
