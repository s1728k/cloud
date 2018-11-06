import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { SignupFormComponent } from './signup-form.component';
import { SignupFormRouting } from './signup-form.routing';

@NgModule({
  imports: [
    SharedModule,
    SignupFormRouting
  ],
  declarations: [SignupFormComponent]
})
export class SignupFormModule { }
