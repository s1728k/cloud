import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { RealTimeComponent } from './real-time.component';
import { RealTimeRouting } from './real-time.routing';

@NgModule({
  imports: [
    SharedModule,
    RealTimeRouting
  ],
  declarations: [RealTimeComponent]
})
export class RealTimeModule { }
