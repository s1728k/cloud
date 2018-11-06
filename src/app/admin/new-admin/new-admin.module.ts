import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { NewAdminComponent } from './new-admin.component';
import { NewAdminRouting } from './new-admin.routing';

@NgModule({
  imports: [
    SharedModule,
    NewAdminRouting
  ],
  declarations: [NewAdminComponent]
})
export class NewAdminModule { }
