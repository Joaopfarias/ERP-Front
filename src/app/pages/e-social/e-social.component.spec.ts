import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ESocialComponent } from './e-social.component';

describe('ESocialComponent', () => {
  let component: ESocialComponent;
  let fixture: ComponentFixture<ESocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ESocialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ESocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
