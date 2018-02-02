import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HomeComponent} from './home/home.component';
import {BioComponent} from './bio/bio.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', loadChildren: './blog/blog.module#BlogModule' },
  { path: 'works', loadChildren: './contents/contents.module#ContentsModule' },
  { path: 'biography', component: BioComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
