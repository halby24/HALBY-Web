import { TestBed, inject } from '@angular/core/testing';

import { WordPressService } from './word-press.service';

describe('WordPressService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WordPressService]
    });
  });

  it('should be created', inject([WordPressService], (service: WordPressService) => {
    expect(service).toBeTruthy();
  }));
});
