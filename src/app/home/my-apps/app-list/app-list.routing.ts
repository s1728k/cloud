import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppListComponent } from './app-list.component';

export const routes: Routes = [
  { path: '', 
    component: AppListComponent,
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

export class AppListRouting {
}
