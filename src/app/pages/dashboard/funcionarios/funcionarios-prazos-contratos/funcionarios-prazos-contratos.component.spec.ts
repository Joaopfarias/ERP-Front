import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionariosPrazosContratosComponent } from './funcionarios-prazos-contratos.component';

describe('FuncionariosPrazosContratosComponent', () => {
  let component: FuncionariosPrazosContratosComponent;
  let fixture: ComponentFixture<FuncionariosPrazosContratosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncionariosPrazosContratosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionariosPrazosContratosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
