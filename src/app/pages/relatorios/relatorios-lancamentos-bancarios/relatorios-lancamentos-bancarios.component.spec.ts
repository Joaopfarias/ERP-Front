import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatoriosLancamentosBancariosComponent } from './relatorios-lancamentos-bancarios.component';

describe('RelatoriosLancamentosBancariosComponent', () => {
  let component: RelatoriosLancamentosBancariosComponent;
  let fixture: ComponentFixture<RelatoriosLancamentosBancariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatoriosLancamentosBancariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatoriosLancamentosBancariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
