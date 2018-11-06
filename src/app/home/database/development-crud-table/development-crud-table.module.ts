import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { DevelopmentCrudTableComponent } from './development-crud-table.component';
import { DevelopmentCrudTableRouting } from './development-crud-table.routing';

@NgModule({
  imports: [
    SharedModule,
    DevelopmentCrudTableRouting
  ],
  declarations: [DevelopmentCrudTableComponent]
})
export class DevelopmentCrudTableModule { }
