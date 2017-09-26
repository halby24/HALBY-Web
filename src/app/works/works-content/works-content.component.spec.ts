import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksContentComponent } from './works-content.component';

describe('WorksContentComponent', () => {
  let component: WorksContentComponent;
  let fixture: ComponentFixture<WorksContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorksContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
