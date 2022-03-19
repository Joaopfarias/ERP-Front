import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecolhimentoImpostosComponent } from './recolhimento-impostos.component';

describe('RecolhimentoImpostosComponent', () => {
  let component: RecolhimentoImpostosComponent;
  let fixture: ComponentFixture<RecolhimentoImpostosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecolhimentoImpostosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecolhimentoImpostosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
