import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { CreateNewTableComponent } from './create-new-table.component';
import { CreateNewTableRouting } from './create-new-table.routing';

@NgModule({
  imports: [
    SharedModule,
    CreateNewTableRouting
  ],
  declarations: [CreateNewTableComponent]
})
export class CreateNewTableModule { }
