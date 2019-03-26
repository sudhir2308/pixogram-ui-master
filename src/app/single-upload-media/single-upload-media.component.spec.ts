import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleUploadMediaComponent } from './single-upload-media.component';

describe('SingleUploadMediaComponent', () => {
  let component: SingleUploadMediaComponent;
  let fixture: ComponentFixture<SingleUploadMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleUploadMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleUploadMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
