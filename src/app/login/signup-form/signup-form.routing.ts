import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { SignupFormComponent } from './signup-form.component';

export const routes: Routes = [
  { path: '', 
    component: SignupFormComponent,
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

export class SignupFormRouting {
}
