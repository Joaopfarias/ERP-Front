import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionariosSituacaoComponent } from './funcionarios-situacao.component';

describe('FuncionariosSituacaoComponent', () => {
  let component: FuncionariosSituacaoComponent;
  let fixture: ComponentFixture<FuncionariosSituacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncionariosSituacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionariosSituacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
