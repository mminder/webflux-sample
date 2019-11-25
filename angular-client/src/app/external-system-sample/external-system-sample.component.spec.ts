import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalSystemSampleComponent } from './external-system-sample.component';

describe('ExternalSystemSampleComponent', () => {
  let component: ExternalSystemSampleComponent;
  let fixture: ComponentFixture<ExternalSystemSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalSystemSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalSystemSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
