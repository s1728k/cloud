import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { PublicThemesComponent } from './public-themes.component';

export const routes: Routes = [
  { path: '', 
  	component: PublicThemesComponent,
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

export class PublicThemesRouting {
}
