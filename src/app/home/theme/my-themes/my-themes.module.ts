import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { MyThemesComponent } from './my-themes.component';
import { MyThemesRouting } from './my-themes.routing';

@NgModule({
  imports: [
    SharedModule,
    MyThemesRouting
  ],
  declarations: [MyThemesComponent]
})
export class MyThemesModule { }
