import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileuploadExplicaeComponent } from './fileupload-explicae.component';

describe('FileuploadExplicaeComponent', () => {
  let component: FileuploadExplicaeComponent;
  let fixture: ComponentFixture<FileuploadExplicaeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileuploadExplicaeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileuploadExplicaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
