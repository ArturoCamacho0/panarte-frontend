import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { CustomersComponent } from './customers.component';
import { ModifyComponent } from './modify/modify.component';

const routes: Routes = [
  { path: '', component: CustomersComponent },
  { path: 'agregar', component: CreateComponent },
  { path: 'modificar/:id', component: ModifyComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
