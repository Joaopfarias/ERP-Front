import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrosESocialComponent } from './parametros-e-social.component';

describe('ParametrosESocialComponent', () => {
  let component: ParametrosESocialComponent;
  let fixture: ComponentFixture<ParametrosESocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParametrosESocialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametrosESocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
