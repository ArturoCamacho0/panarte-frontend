import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { SalesComponent } from './sales.component';
import { CreateComponent } from './create/create.component';
import { ModifyComponent } from './modify/modify.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { MomentPipe } from 'src/app/pipes/moment.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SalesComponent,
    CreateComponent,
    ModifyComponent,
    MomentPipe
  ],
  imports: [
    CommonModule,
    SalesRoutingModule,
    ComponentsModule,
    FormsModule
  ]
})
export class SalesModule { }
