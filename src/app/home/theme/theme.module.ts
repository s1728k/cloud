import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ThemeComponent } from './theme.component';
import { ThemeRouting } from './theme.routing';

@NgModule({
  imports: [
    SharedModule,
    ThemeRouting
  ],
  declarations: [ThemeComponent]
})
export class ThemeModule { }
