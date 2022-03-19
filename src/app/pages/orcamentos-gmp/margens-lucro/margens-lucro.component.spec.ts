import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MargensLucroComponent } from './margens-lucro.component';

describe('MargensLucroComponent', () => {
  let component: MargensLucroComponent;
  let fixture: ComponentFixture<MargensLucroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MargensLucroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MargensLucroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
