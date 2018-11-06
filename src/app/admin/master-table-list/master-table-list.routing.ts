import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { MasterTableListComponent } from './master-table-list.component';

export const routes: Routes = [
  { path: '', component: MasterTableListComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class MasterTableListRouting {
}
