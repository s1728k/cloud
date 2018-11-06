import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AdminLoginComponent } from './admin-login.component';

export const routes: Routes = [
  { path: '', component: AdminLoginComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AdminLoginRouting {
}
