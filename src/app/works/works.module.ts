import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorksRoutingModule } from './works-routing.module';
import { WorksContentComponent } from './works-content/works-content.component';
import { WorksComponent } from './works.component';
import {PartsModule} from "../parts/parts.module";
import { WorksListComponent } from './works-list/works-list.component';
import {MasonryModule} from 'angular2-masonry';
import {WordPressModule} from "../word-press/word-press.module";
import { WorkTileComponent } from './work-tile/work-tile.component';

@NgModule({
  imports: [
    CommonModule,
    WorksRoutingModule,
    PartsModule,
    MasonryModule,
    WordPressModule
  ],
  declarations: [
    WorksContentComponent,
    WorksComponent,
    WorksListComponent,
    WorkTileComponent
  ]
})
export class WorksModule { }
