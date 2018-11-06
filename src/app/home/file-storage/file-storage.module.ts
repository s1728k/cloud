import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FileStorageComponent } from './file-storage.component';
import { FileStorageRouting } from './file-storage.routing';

@NgModule({
  imports: [
    SharedModule,
    FileStorageRouting
  ],
  declarations: [FileStorageComponent]
})
export class FileStorageModule { }
