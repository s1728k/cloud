import { NgModule } from '@angular/core';
import { ElerefDirective } from './eleref.directive';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
  	CommonModule,
	FormsModule
  ],
  declarations: [ElerefDirective],
  exports:[
  	CommonModule,
	FormsModule,
  	ElerefDirective,
  ]
})
export class SharedModule { }
