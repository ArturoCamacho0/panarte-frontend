import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { CreateComponent } from './create/create.component';
import { ModifyComponent } from './modify/modify.component';


@NgModule({
  declarations: [
    CustomersComponent,
    CreateComponent,
    ModifyComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
