import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared/auth-guard.service';

export const routes: Routes = [
  { path: 'login', loadChildren: './login/login.module#LoginModule'},
  { path: 'admin-login', loadChildren: './admin-login/admin-login.module#AdminLoginModule'},
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
  { path: '', loadChildren: './home/home.module#HomeModule'},
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

// , canActivate:[AuthGuard]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRouting {
}
