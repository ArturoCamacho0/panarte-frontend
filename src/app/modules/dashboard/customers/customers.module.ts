import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { CreateComponent } from './create/create.component';
import { ModifyComponent } from './modify/modify.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CustomersComponent,
    CreateComponent,
    ModifyComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    ComponentsModule,
    FormsModule
  ]
})
export class CustomersModule { }
