import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ModifyTableComponent } from './modify-table.component';
import { ModifyTableRouting } from './modify-table.routing';

@NgModule({
  imports: [
    SharedModule,
    ModifyTableRouting
  ],
  declarations: [ModifyTableComponent]
})
export class ModifyTableModule { }
