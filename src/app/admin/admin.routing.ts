import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AdminComponent } from './admin.component';

export const routes: Routes = [
  { path: '', 
    component: AdminComponent,
    children:[
      {path: '', redirectTo: 'master-table-list', pathMatch: 'full'},
      {path: 'master-table-list', loadChildren: './master-table-list/master-table-list.module#MasterTableListModule'},
      {path: 'new-admin', loadChildren: './new-admin/new-admin.module#NewAdminModule'},
    ]
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

export class AdminRouting {
}
