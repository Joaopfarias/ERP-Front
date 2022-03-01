import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrcamentosGMPComponent } from './orcamentos-gmp.component';

describe('OrcamentosGMPComponent', () => {
  let component: OrcamentosGMPComponent;
  let fixture: ComponentFixture<OrcamentosGMPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrcamentosGMPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrcamentosGMPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
