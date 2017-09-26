import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlogComponent} from './blog.component';
import {ArticleListComponent} from './article-list/article-list.component';
import {ArticleComponent} from './article/article.component';
import {BlogSearchComponent} from './blog-search/blog-search.component';

const routes: Routes = [{
  path: '',
  component: BlogComponent,
  children: [
    { path: '', component: ArticleListComponent },
    { path: 'search', component: BlogSearchComponent },
    { path: ':id', component: ArticleComponent },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
