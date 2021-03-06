import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WordPressService} from "./word-press.service";
import {HttpModule} from "@angular/http";

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [],
  providers: [WordPressService]
})
export class WordPressModule { }
