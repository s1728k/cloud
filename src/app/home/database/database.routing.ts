import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { DatabaseComponent } from './database.component';

export const routes: Routes = [
  { path: '', 
  	component: DatabaseComponent,
  	children: [
  		{path:'create-new-table', loadChildren: './create-new-table/create-new-table.module#CreateNewTableModule'},
      {path:'modify-table', loadChildren: './modify-table/modify-table.module#ModifyTableModule'},
      {path:'manual-crud-table', loadChildren: './crud-table/crud-table.module#CrudTableModule'},
      {path:'dev-crud-table', loadChildren: './development-crud-table/development-crud-table.module#DevelopmentCrudTableModule'},
      {path:'public-tables', loadChildren: './community-table-list/community-table-list.module#CommunityTableListModule'},
      {path:'my-table-list', loadChildren: './my-table-list/my-table-list.module#MyTableListModule'},
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

export class DatabaseRouting {
}
