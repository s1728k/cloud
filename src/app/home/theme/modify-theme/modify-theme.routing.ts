import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ModifyThemeComponent } from './modify-theme.component';

export const routes: Routes = [
  { path: '', 
  	component: ModifyThemeComponent,
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

export class ModifyThemeRouting {
}
