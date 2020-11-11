import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MegasenaExplicaeComponent } from './megasena-explicae.component';

const routes_megasena: Routes = [
  { path: '', component: MegasenaExplicaeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes_megasena)],
  exports: [RouterModule],
})
export class MegasenaExplicaeRoutingModule {}
