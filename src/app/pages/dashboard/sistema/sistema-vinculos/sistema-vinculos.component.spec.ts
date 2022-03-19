import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemaVinculosComponent } from './sistema-vinculos.component';

describe('SistemaVinculosComponent', () => {
  let component: SistemaVinculosComponent;
  let fixture: ComponentFixture<SistemaVinculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SistemaVinculosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SistemaVinculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
