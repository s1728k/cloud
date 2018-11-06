import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CreateNewTableComponent } from './create-new-table.component';

export const routes: Routes = [
  { path: '', component: CreateNewTableComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class CreateNewTableRouting {
}
