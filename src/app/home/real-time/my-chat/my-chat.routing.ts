import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { MyChatComponent } from './my-chat.component';

export const routes: Routes = [
  { path: '', component: MyChatComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class MyChatRouting {
}
