import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { MyTableListComponent } from './my-table-list.component';

export const routes: Routes = [
  { path: '', component: MyTableListComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class MyTableListRouting {
}
