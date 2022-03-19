import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncargosSociaisComponent } from './encargos-sociais.component';

describe('EncargosSociaisComponent', () => {
  let component: EncargosSociaisComponent;
  let fixture: ComponentFixture<EncargosSociaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncargosSociaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncargosSociaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
