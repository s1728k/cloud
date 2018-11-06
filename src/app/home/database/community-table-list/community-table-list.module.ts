import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { CommunityTableListComponent } from './community-table-list.component';
import { CommunityTableListRouting } from './community-table-list.routing';

@NgModule({
  imports: [
    SharedModule,
    CommunityTableListRouting
  ],
  declarations: [CommunityTableListComponent]
})
export class CommunityTableListModule { }
