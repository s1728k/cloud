import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ResetPasswordComponent } from './reset-password.component';
import { ResetPasswordRouting } from './reset-password.routing';

@NgModule({
  imports: [
    SharedModule,
    ResetPasswordRouting
  ],
  declarations: [ResetPasswordComponent]
})
export class ResetPasswordModule { }
