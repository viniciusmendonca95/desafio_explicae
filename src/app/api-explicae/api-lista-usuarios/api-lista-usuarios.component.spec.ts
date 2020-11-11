import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiListaUsuariosComponent } from './api-lista-usuarios.component';

describe('ApiListaUsuariosComponent', () => {
  let component: ApiListaUsuariosComponent;
  let fixture: ComponentFixture<ApiListaUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiListaUsuariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiListaUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
