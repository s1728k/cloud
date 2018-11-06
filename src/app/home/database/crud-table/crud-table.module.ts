import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { CrudTableComponent } from './crud-table.component';
import { CrudTableRouting } from './crud-table.routing';

@NgModule({
  imports: [
    SharedModule,
    CrudTableRouting
  ],
  declarations: [CrudTableComponent]
})
export class CrudTableModule { }
