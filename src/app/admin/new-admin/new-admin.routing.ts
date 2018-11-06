import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { NewAdminComponent } from './new-admin.component';

export const routes: Routes = [
  { path: '', component: NewAdminComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class NewAdminRouting {
}
