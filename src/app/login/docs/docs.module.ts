import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { DocsComponent } from './docs.component';
import { DocsRouting } from './docs.routing';

@NgModule({
  imports: [
    SharedModule,
    DocsRouting
  ],
  declarations: [DocsComponent]
})
export class DocsModule { }
