import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ThemeComponent } from './theme.component';

export const routes: Routes = [
  { path: '', 
  	component: ThemeComponent,
  	children: [
  		// {path: 'my-client-apps', loadChildren: './client-app-list/client-app-list.module#ClientAppListModule'},
  		{path: 'new-theme', loadChildren: './new-theme/new-theme.module#NewThemeModule'},
      {path: 'modify-theme', loadChildren: './modify-theme/modify-theme.module#ModifyThemeModule'},
      {path: 'public-themes', loadChildren: './public-themes/public-themes.module#PublicThemesModule'},
      {path: 'my-themes', loadChildren: './my-themes/my-themes.module#MyThemesModule'},
      {path: 'my-files', loadChildren: './my-files/my-files.module#MyFilesModule'},
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

export class ThemeRouting {
}
