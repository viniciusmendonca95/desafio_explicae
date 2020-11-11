import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ApiExplicaeRoutingModule } from './api-explicae-routing.module';
import { ApiExplicaeComponent } from './api-explicae.component';
import { ApiListaUsuariosComponent } from './api-lista-usuarios/api-lista-usuarios.component';

@NgModule({
  declarations: [ApiExplicaeComponent, ApiListaUsuariosComponent],
  imports: [SharedModule, ApiExplicaeRoutingModule],
})
export class ApiExplicaeModule {}
