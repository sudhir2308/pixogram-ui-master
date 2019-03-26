import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadMediaFileComponent } from './upload-media-file.component';

describe('UploadMediaFileComponent', () => {
  let component: UploadMediaFileComponent;
  let fixture: ComponentFixture<UploadMediaFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadMediaFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadMediaFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
