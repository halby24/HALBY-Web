import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ContentsRoutingModule} from './contents-routing.module';
import {ContentsComponent} from "./contents.component";
import {PartsModule} from "../parts/parts.module";
import {RestService} from "../rest.service";
import {HttpModule} from "@angular/http";

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    ContentsRoutingModule,
    PartsModule
  ],
  declarations: [ContentsComponent],
  providers: [
    RestService
  ]
})
export class ContentsModule { }
