import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComissoesFaturadasComponent } from './comissoes-faturadas.component';

describe('ComissoesFaturadasComponent', () => {
  let component: ComissoesFaturadasComponent;
  let fixture: ComponentFixture<ComissoesFaturadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComissoesFaturadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComissoesFaturadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
