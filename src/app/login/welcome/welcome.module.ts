import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { WelcomeComponent } from './welcome.component';
import { WelcomeRouting } from './welcome.routing';

@NgModule({
  imports: [
    SharedModule,
    WelcomeRouting
  ],
  declarations: [WelcomeComponent]
})
export class WelcomeModule { }
