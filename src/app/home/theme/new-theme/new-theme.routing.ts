import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { NewThemeComponent } from './new-theme.component';

export const routes: Routes = [
  { path: '', 
  	component: NewThemeComponent,
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

export class NewThemeRouting {
}
