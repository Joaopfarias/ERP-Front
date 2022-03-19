import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaturamentosComponent } from './faturamentos.component';

describe('FaturamentosComponent', () => {
  let component: FaturamentosComponent;
  let fixture: ComponentFixture<FaturamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaturamentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaturamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
