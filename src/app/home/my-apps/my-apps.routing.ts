import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { MyAppsComponent } from './my-apps.component';

export const routes: Routes = [
  { path: '', 
    component: MyAppsComponent,
    children:[
      {path: '', redirectTo: 'app-list', pathMatch: 'full'},
      {path: 'app-list', loadChildren: './app-list/app-list.module#AppListModule'},
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

export class MyAppsRouting {
}
