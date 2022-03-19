import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeraisClienteComponent } from './gerais-cliente.component';

describe('GeraisClienteComponent', () => {
  let component: GeraisClienteComponent;
  let fixture: ComponentFixture<GeraisClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeraisClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeraisClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
