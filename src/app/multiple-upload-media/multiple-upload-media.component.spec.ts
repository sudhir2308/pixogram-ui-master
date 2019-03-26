import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleUploadMediaComponent } from './multiple-upload-media.component';

describe('MultipleUploadMediaComponent', () => {
  let component: MultipleUploadMediaComponent;
  let fixture: ComponentFixture<MultipleUploadMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleUploadMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleUploadMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
