import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoletoAvulsoComponent } from './boleto-avulso.component';

describe('BoletoAvulsoComponent', () => {
  let component: BoletoAvulsoComponent;
  let fixture: ComponentFixture<BoletoAvulsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoletoAvulsoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoletoAvulsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
