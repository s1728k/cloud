import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CommunityTableListComponent } from './community-table-list.component';

export const routes: Routes = [
  { path: '', component: CommunityTableListComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class CommunityTableListRouting {
}
