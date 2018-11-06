import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { GroupChatComponent } from './group-chat.component';
import { GroupChatRouting } from './group-chat.routing';

@NgModule({
  imports: [
    SharedModule,
    GroupChatRouting
  ],
  declarations: [GroupChatComponent]
})
export class GroupChatModule { }
