import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WorksContentComponent} from './works-content/works-content.component';
import {WorksComponent} from './works.component';
import {WorksListComponent} from "./works-list/works-list.component";

const routes: Routes = [{
  path: '',
  component: WorksComponent,
  children: [
    { path: '', component: WorksListComponent },
    { path: ':id', component: WorksContentComponent },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorksRoutingModule { }
