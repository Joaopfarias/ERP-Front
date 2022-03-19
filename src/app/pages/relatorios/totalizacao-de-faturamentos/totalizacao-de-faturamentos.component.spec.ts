import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalizacaoDeFaturamentosComponent } from './totalizacao-de-faturamentos.component';

describe('TotalizacaoDeFaturamentosComponent', () => {
  let component: TotalizacaoDeFaturamentosComponent;
  let fixture: ComponentFixture<TotalizacaoDeFaturamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalizacaoDeFaturamentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalizacaoDeFaturamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
