import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamSampleComponent } from './stream-sample.component';

describe('StreamSampleComponent', () => {
  let component: StreamSampleComponent;
  let fixture: ComponentFixture<StreamSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreamSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
