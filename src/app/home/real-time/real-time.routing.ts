import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { RealTimeComponent } from './real-time.component';

export const routes: Routes = [
  { path: '', 
    component: RealTimeComponent,
    children:[
      {path: '', redirectTo: 'my-chat', pathMatch: 'full'},
      {path: 'my-chat', loadChildren: './my-chat/my-chat.module#MyChatModule'},
      {path: 'group-chat', loadChildren: './group-chat/group-chat.module#GroupChatModule'},
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

export class RealTimeRouting {
}
