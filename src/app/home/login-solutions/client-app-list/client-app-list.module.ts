import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ClientAppListComponent } from './client-app-list.component';
import { ClientAppListRouting } from './client-app-list.routing';

@NgModule({
  imports: [
    SharedModule,
    ClientAppListRouting
  ],
  declarations: [ClientAppListComponent]
})
export class ClientAppListModule { }
