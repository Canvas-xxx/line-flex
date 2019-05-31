import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexPreviewComponent } from './flex-preview.component';

describe('FlexPreviewComponent', () => {
  let component: FlexPreviewComponent;
  let fixture: ComponentFixture<FlexPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
