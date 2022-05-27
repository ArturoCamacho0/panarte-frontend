import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialsRoutingModule } from './materials-routing.module';
import { CreateComponent } from './create/create.component';
import { ModifyComponent } from './modify/modify.component';
import { MaterialsComponent } from './materials.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MaterialsComponent,
    CreateComponent,
    ModifyComponent
  ],
  imports: [
    CommonModule,
    MaterialsRoutingModule,
    ComponentsModule,
    FormsModule
  ]
})
export class MaterialsModule { }
