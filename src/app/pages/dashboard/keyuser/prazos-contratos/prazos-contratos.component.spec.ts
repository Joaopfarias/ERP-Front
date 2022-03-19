import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrazosContratosComponent } from './prazos-contratos.component';

describe('PrazosContratosComponent', () => {
  let component: PrazosContratosComponent;
  let fixture: ComponentFixture<PrazosContratosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrazosContratosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrazosContratosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
