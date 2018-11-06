import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ClientAppListComponent } from './client-app-list.component';

export const routes: Routes = [
  { path: '', component: ClientAppListComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class ClientAppListRouting {
}
