import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoletosNaoPagosComponent } from './boletos-nao-pagos.component';

describe('BoletosNaoPagosComponent', () => {
  let component: BoletosNaoPagosComponent;
  let fixture: ComponentFixture<BoletosNaoPagosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoletosNaoPagosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoletosNaoPagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
