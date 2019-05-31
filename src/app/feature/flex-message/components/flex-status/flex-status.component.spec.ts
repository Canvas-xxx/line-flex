import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexStatusComponent } from './flex-status.component';

describe('FlexStatusComponent', () => {
  let component: FlexStatusComponent;
  let fixture: ComponentFixture<FlexStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
