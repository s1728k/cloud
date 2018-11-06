import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { NewThemeComponent } from './new-theme.component';
import { NewThemeRouting } from './new-theme.routing';

@NgModule({
  imports: [
    SharedModule,
    NewThemeRouting
  ],
  declarations: [NewThemeComponent]
})
export class NewThemeModule { }
