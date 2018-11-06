import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CrudTableComponent } from './crud-table.component';

export const routes: Routes = [
  { path: '', component: CrudTableComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class CrudTableRouting {
}
