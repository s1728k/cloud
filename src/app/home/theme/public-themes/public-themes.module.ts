import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { PublicThemesComponent } from './public-themes.component';
import { PublicThemesRouting } from './public-themes.routing';

@NgModule({
  imports: [
    SharedModule,
    PublicThemesRouting
  ],
  declarations: [PublicThemesComponent]
})
export class PublicThemesModule { }
