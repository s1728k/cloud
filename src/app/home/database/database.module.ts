import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { DatabaseComponent } from './database.component';
import { DatabaseRouting } from './database.routing';

@NgModule({
  imports: [
    SharedModule,
    DatabaseRouting
  ],
  declarations: [DatabaseComponent]
})
export class DatabaseModule { }
