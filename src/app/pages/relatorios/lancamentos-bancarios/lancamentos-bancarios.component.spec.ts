import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LancamentosBancariosComponent } from './lancamentos-bancarios.component';

describe('LancamentosBancariosComponent', () => {
  let component: LancamentosBancariosComponent;
  let fixture: ComponentFixture<LancamentosBancariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LancamentosBancariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LancamentosBancariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
