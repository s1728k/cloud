import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { MyFilesComponent } from './my-files.component';
import { MyFilesRouting } from './my-files.routing';

@NgModule({
  imports: [
    SharedModule,
    MyFilesRouting
  ],
  declarations: [MyFilesComponent]
})
export class MyFilesModule { }
