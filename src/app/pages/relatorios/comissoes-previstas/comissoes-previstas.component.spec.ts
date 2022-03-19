import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComissoesPrevistasComponent } from './comissoes-previstas.component';

describe('ComissoesPrevistasComponent', () => {
  let component: ComissoesPrevistasComponent;
  let fixture: ComponentFixture<ComissoesPrevistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComissoesPrevistasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComissoesPrevistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
