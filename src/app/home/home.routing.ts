import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home.component';

export const routes: Routes = [
  { path: '', 
    component: HomeComponent,
    children:[
      {path: '', redirectTo: 'login-solutions', pathMatch: 'full'},
      {path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
      {path: 'my-apps', loadChildren: './my-apps/my-apps.module#MyAppsModule'},
      // {path: 'login-solutions', loadChildren: './login-solutions/login-solutions.module#LoginSolutionsModule'},
      {path: 'database', loadChildren: './database/database.module#DatabaseModule'},
      {path: 'themes', loadChildren: './theme/theme.module#ThemeModule'},
      {path: 'real-time', loadChildren: './real-time/real-time.module#RealTimeModule'},
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

export class HomeRouting {
}
