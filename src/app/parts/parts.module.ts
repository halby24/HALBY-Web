import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavComponent} from './nav/nav.component';
import {HeroComponent} from './hero/hero.component';
import {FooterComponent} from './footer/footer.component';
import {RouterModule} from '@angular/router';
import {SanitizeHtmlPipe} from './sanitize-html.pipe';
import {CardComponent} from './card/card.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavComponent,
    HeroComponent,
    FooterComponent,
    SanitizeHtmlPipe,
    CardComponent
  ],
  declarations: [
    NavComponent,
    HeroComponent,
    FooterComponent,
    SanitizeHtmlPipe,
    CardComponent,
  ]
})
export class PartsModule { }
