import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { EmailFormComponent } from './email-form.component';
import { EmailFormRouting } from './email-form.routing';

@NgModule({
  imports: [
    SharedModule,
    EmailFormRouting
  ],
  declarations: [EmailFormComponent]
})
export class EmailFormModule { }
