import { Injectable } from '@angular/core';
// import * as hljs from 'highlight.js/lib/highlight';

@Injectable()
export class HighlightService {

  constructor() { }

  hightlight(domStr: string): HTMLElement {
    const el = document.createElement(domStr);
    const codes = el.getElementsByTagName('pre');
    [].forEach.call(codes, code => hljs.highlightBlock(code));
    return el;
  }

}
