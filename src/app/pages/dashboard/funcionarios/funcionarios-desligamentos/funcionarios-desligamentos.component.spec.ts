import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionariosDesligamentosComponent } from './funcionarios-desligamentos.component';

describe('FuncionariosDesligamentosComponent', () => {
  let component: FuncionariosDesligamentosComponent;
  let fixture: ComponentFixture<FuncionariosDesligamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncionariosDesligamentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionariosDesligamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
