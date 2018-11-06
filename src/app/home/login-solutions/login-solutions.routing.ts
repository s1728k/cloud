import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { LoginSolutionsComponent } from './login-solutions.component';
import { ClientAppListComponent } from './client-app-list/client-app-list.component';

export const routes: Routes = [
  { path: '', 
  	component: LoginSolutionsComponent,
  	children: [
  		{path: 'my-client-apps', loadChildren: './client-app-list/client-app-list.module#ClientAppListModule'},
  		{path: '', loadChildren: './client-app-list/client-app-list.module#ClientAppListModule'},
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

export class LoginSolutionsRouting {
}
