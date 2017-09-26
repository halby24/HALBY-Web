import { Component, OnInit } from '@angular/core';
import {WordPressService} from '../../word-press/word-press.service';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-works-content',
  templateUrl: './works-content.component.html',
  styleUrls: ['./works-content.component.scss']
})
export class WorksContentComponent implements OnInit {

  work: Observable<any>;

  constructor(private wp: WordPressService,
              private route: ActivatedRoute) {
    route.params.subscribe(params => this.work = wp.get('halby24.com/wp', params.id, 'works'));
  }

  ngOnInit() {
  }

}
