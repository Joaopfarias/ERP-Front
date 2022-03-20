import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CnabContasAPagarComponent } from './cnab-contas-a-pagar.component';

describe('CnabContasAPagarComponent', () => {
  let component: CnabContasAPagarComponent;
  let fixture: ComponentFixture<CnabContasAPagarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CnabContasAPagarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CnabContasAPagarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
