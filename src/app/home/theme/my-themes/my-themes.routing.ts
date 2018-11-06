import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { MyThemesComponent } from './my-themes.component';

export const routes: Routes = [
  { path: '', 
  	component: MyThemesComponent,
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

export class MyThemesRouting {
}
