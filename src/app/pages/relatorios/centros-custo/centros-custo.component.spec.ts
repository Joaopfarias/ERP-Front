import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentrosCustoComponent } from './centros-custo.component';

describe('CentrosCustoComponent', () => {
  let component: CentrosCustoComponent;
  let fixture: ComponentFixture<CentrosCustoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentrosCustoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentrosCustoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
