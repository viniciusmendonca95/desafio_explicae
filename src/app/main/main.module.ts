import { MainComponent } from './main.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [MainComponent],
  imports: [
    CoreModule,
    CommonModule,
    MainRoutingModule,
    SharedModule,
  ]
})
export class MainModule { }
