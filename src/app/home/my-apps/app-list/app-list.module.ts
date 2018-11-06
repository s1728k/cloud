import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { AppListComponent } from './app-list.component';
import { AppListRouting } from './app-list.routing';

@NgModule({
  imports: [
    SharedModule,
    AppListRouting
  ],
  declarations: [AppListComponent]
})
export class AppListModule { }
