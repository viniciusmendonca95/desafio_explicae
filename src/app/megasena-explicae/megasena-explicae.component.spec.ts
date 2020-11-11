import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MegasenaExplicaeComponent } from './megasena-explicae.component';

describe('MegasenaExplicaeComponent', () => {
  let component: MegasenaExplicaeComponent;
  let fixture: ComponentFixture<MegasenaExplicaeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MegasenaExplicaeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MegasenaExplicaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
