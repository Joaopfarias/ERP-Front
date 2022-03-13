import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CnabContasAReceberComponent } from './cnab-contas-a-receber.component';

describe('CnabContasAReceberComponent', () => {
  let component: CnabContasAReceberComponent;
  let fixture: ComponentFixture<CnabContasAReceberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CnabContasAReceberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CnabContasAReceberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
