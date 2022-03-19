import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposFuncionariosComponent } from './tipos-funcionarios.component';

describe('TiposFuncionariosComponent', () => {
  let component: TiposFuncionariosComponent;
  let fixture: ComponentFixture<TiposFuncionariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiposFuncionariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposFuncionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
