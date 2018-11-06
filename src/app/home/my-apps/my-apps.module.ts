import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { MyAppsComponent } from './my-apps.component';
import { MyAppsRouting } from './my-apps.routing';

@NgModule({
  imports: [
    SharedModule,
    MyAppsRouting
  ],
  declarations: [MyAppsComponent]
})
export class MyAppsModule { }
