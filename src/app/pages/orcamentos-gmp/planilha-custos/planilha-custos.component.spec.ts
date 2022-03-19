import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanilhaCustosComponent } from './planilha-custos.component';

describe('PlanilhaCustosComponent', () => {
  let component: PlanilhaCustosComponent;
  let fixture: ComponentFixture<PlanilhaCustosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanilhaCustosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanilhaCustosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
