import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionariosVinculosComponent } from './funcionarios-vinculos.component';

describe('FuncionariosVinculosComponent', () => {
  let component: FuncionariosVinculosComponent;
  let fixture: ComponentFixture<FuncionariosVinculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncionariosVinculosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionariosVinculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
