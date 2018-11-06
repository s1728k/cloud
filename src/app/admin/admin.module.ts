import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AdminComponent } from './admin.component';
import { AdminRouting } from './admin.routing';

@NgModule({
  imports: [
    SharedModule,
    AdminRouting
  ],
  declarations: [AdminComponent]
})
export class AdminModule { }
