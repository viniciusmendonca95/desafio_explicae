import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MegasenaExplicaeRoutingModule } from './megasena-explicae-routing.module';
import { MegasenaExplicaeComponent } from './megasena-explicae.component';


@NgModule({
  declarations: [MegasenaExplicaeComponent],
  imports: [
    CommonModule,
    MegasenaExplicaeRoutingModule,
    SharedModule
  ]
})
export class MegasenaExplicaeModule { }
