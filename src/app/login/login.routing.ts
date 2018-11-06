import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login.component';

export const routes: Routes = [
  { path: '', 
    component: LoginComponent,
    children:[
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: 'welcome', loadChildren: './welcome/welcome.module#WelcomeModule'},
      {path: 'docs', loadChildren: './docs/docs.module#DocsModule'},
      {path: 'login-form', loadChildren: './login-form/login-form.module#LoginFormModule'},
      {path: 'email', loadChildren: './email-form/email-form.module#EmailFormModule'},
      {path: 'reset-password', loadChildren: './reset-password/reset-password.module#ResetPasswordModule'},
      {path: 'signup-form', loadChildren: './signup-form/signup-form.module#SignupFormModule'},
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class LoginRouting {
}
