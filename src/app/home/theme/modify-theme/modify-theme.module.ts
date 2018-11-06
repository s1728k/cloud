import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ModifyThemeComponent } from './modify-theme.component';
import { ModifyThemeRouting } from './modify-theme.routing';

@NgModule({
  imports: [
    SharedModule,
    ModifyThemeRouting
  ],
  declarations: [ModifyThemeComponent]
})
export class ModifyThemeModule { }
