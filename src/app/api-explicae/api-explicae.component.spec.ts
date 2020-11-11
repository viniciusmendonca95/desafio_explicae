import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiExplicaeComponent } from './api-explicae.component';

describe('ApiExplicaeComponent', () => {
  let component: ApiExplicaeComponent;
  let fixture: ComponentFixture<ApiExplicaeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiExplicaeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiExplicaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
