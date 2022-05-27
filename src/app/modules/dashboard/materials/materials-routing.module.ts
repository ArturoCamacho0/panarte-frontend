import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { MaterialsComponent } from './materials.component';
import { ModifyComponent } from './modify/modify.component';

const routes: Routes = [
  { path: '', component: MaterialsComponent },
  { path: 'agregar', component: CreateComponent },
  { path: 'modificar/:id', component: ModifyComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialsRoutingModule { }
