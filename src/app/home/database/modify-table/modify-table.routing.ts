import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ModifyTableComponent } from './modify-table.component';

export const routes: Routes = [
  { path: '', component: ModifyTableComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class ModifyTableRouting {
}
