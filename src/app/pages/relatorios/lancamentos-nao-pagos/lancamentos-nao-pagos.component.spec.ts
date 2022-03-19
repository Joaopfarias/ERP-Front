import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LancamentosNaoPagosComponent } from './lancamentos-nao-pagos.component';

describe('LancamentosNaoPagosComponent', () => {
  let component: LancamentosNaoPagosComponent;
  let fixture: ComponentFixture<LancamentosNaoPagosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LancamentosNaoPagosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LancamentosNaoPagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
