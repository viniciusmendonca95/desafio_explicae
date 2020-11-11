import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      { path: '', redirectTo: 'megasena', pathMatch: 'full' },
      { path: 'megasena', loadChildren: () => import('../megasena-explicae/megasena-explicae.module').then(m => m.MegasenaExplicaeModule) },
      { path: 'fileupload', loadChildren: () => import('../fileupload-explicae/fileupload-explicae.module').then(m => m.FileuploadExplicaeModule) },
      { path: 'api', loadChildren: () => import('../api-explicae/api-explicae.module').then(m => m.ApiExplicaeModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
