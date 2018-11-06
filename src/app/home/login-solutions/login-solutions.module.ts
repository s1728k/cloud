import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { LoginSolutionsComponent } from './login-solutions.component';
import { LoginSolutionsRouting } from './login-solutions.routing';

@NgModule({
  imports: [
    SharedModule,
    LoginSolutionsRouting
  ],
  declarations: [LoginSolutionsComponent]
})
export class LoginSolutionsModule { }
