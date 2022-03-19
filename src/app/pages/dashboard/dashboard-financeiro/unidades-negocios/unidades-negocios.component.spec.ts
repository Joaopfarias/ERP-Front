import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadesNegociosComponent } from './unidades-negocios.component';

describe('UnidadesNegociosComponent', () => {
  let component: UnidadesNegociosComponent;
  let fixture: ComponentFixture<UnidadesNegociosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnidadesNegociosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidadesNegociosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
