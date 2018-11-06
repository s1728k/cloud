import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { MyTableListComponent } from './my-table-list.component';
import { MyTableListRouting } from './my-table-list.routing';

@NgModule({
  imports: [
    SharedModule,
    MyTableListRouting
  ],
  declarations: [MyTableListComponent]
})
export class MyTableListModule { }
