import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicosNotasFiscaisComponent } from './servicos-notas-fiscais.component';

describe('ServicosNotasFiscaisComponent', () => {
  let component: ServicosNotasFiscaisComponent;
  let fixture: ComponentFixture<ServicosNotasFiscaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicosNotasFiscaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicosNotasFiscaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
