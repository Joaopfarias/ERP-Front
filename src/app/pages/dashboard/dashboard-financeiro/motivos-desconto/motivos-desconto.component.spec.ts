import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotivosDescontoComponent } from './motivos-desconto.component';

describe('MotivosDescontoComponent', () => {
  let component: MotivosDescontoComponent;
  let fixture: ComponentFixture<MotivosDescontoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotivosDescontoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotivosDescontoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
