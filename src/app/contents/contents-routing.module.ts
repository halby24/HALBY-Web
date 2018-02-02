import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContentsComponent} from "./contents.component";

const routes: Routes = [{
  path: '',
  component: ContentsComponent,
  children: [{
    path: ''
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentsRoutingModule { }