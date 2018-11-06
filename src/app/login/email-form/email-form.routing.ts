import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { EmailFormComponent } from './email-form.component';

export const routes: Routes = [
  { path: '', 
    component: EmailFormComponent,
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

export class EmailFormRouting {
}
