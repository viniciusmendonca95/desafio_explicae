import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApiExplicaeComponent } from './api-explicae.component';

const routes_api: Routes = [{ path: '', component: ApiExplicaeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes_api)],
  exports: [RouterModule],
})
export class ApiExplicaeRoutingModule {}
