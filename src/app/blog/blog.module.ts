import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BlogRoutingModule} from './blog-routing.module';
import {BlogComponent} from './blog.component';
import {ArticleListComponent} from './article-list/article-list.component';
import {PartsModule} from '../parts/parts.module';
import {WordPressModule} from '../word-press/word-press.module';
import {ArticleComponent} from './article/article.component';
import {BlogSideBarComponent} from './blog-side-bar/blog-side-bar.component';
import {BlogSearchComponent} from './blog-search/blog-search.component';
import {HighlightJsModule} from 'angular2-highlight-js';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    PartsModule,
    WordPressModule,
    HighlightJsModule,
  ],
  declarations: [
    BlogComponent,
    ArticleListComponent,
    ArticleComponent,
    BlogSideBarComponent,
    BlogSearchComponent,
  ],
})
export class BlogModule { }
