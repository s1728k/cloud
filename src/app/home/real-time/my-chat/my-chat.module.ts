import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { MyChatComponent } from './my-chat.component';
import { MyChatRouting } from './my-chat.routing';

@NgModule({
  imports: [
    SharedModule,
    MyChatRouting
  ],
  declarations: [MyChatComponent]
})
export class MyChatModule { }
