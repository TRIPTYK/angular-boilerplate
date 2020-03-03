import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstablishmentsRoutingModule } from './establishments-routing.module';
import { EstablishmentsComponent } from './establishments.component';
import { EstablishmentsListComponent } from './establishments-list/establishments-list.component';
import { MaterialModule } from '@cpas/material';


@NgModule({
  declarations: [EstablishmentsComponent, EstablishmentsListComponent],
  imports: [
    CommonModule,
    EstablishmentsRoutingModule,
    MaterialModule
  ]
})
export class EstablishmentsModule { }
