import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenciaPrecoComponent } from './referencia-preco.component';

describe('ReferenciaPrecoComponent', () => {
  let component: ReferenciaPrecoComponent;
  let fixture: ComponentFixture<ReferenciaPrecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferenciaPrecoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenciaPrecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
