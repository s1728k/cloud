import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { MasterTableListComponent } from './master-table-list.component';
import { MasterTableListRouting } from './master-table-list.routing';

@NgModule({
  imports: [
    SharedModule,
    MasterTableListRouting
  ],
  declarations: [MasterTableListComponent]
})
export class MasterTableListModule { }
