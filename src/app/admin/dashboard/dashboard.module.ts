import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardRouting } from './dashboard.routing';

@NgModule({
  imports: [
    SharedModule,
    DashboardRouting
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
