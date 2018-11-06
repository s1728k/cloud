import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { LoginFormComponent } from './login-form.component';
import { LoginFormRouting } from './login-form.routing';

@NgModule({
  imports: [
    SharedModule,
    LoginFormRouting
  ],
  declarations: [LoginFormComponent]
})
export class LoginFormModule { }
