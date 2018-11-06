import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { DevelopmentCrudTableComponent } from './development-crud-table.component';

export const routes: Routes = [
  { path: '', component: DevelopmentCrudTableComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class DevelopmentCrudTableRouting {
}
