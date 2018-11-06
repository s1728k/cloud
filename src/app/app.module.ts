import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';

import { AuthGuard } from './shared/auth-guard.service';
import { UserAccessGuard } from './shared/user-access-guard.service';
import { RestApiService } from './shared/rest-api.service';
import { CRUDService } from './shared/crud.service';
import { MessageService } from './shared/message.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule, 
    FormsModule,
    HttpClientModule  ,
    AppRouting
  ],
  providers: [AuthGuard, UserAccessGuard, RestApiService, CRUDService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
