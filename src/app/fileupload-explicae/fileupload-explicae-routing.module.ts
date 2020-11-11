import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FileuploadExplicaeComponent } from './fileupload-explicae.component';

const routes_fileupload: Routes = [
  { path: '', component: FileuploadExplicaeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes_fileupload)],
  exports: [RouterModule],
})
export class FileuploadExplicaeRoutingModule {}
