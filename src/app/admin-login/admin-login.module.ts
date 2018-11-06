import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AdminLoginComponent } from './admin-login.component';
import { AdminLoginRouting } from './admin-login.routing';

@NgModule({
  imports: [
    SharedModule,
    AdminLoginRouting
  ],
  declarations: [AdminLoginComponent]
})
export class AdminLoginModule { }
