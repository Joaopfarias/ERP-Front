import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LancamentoBancarioComponent } from './lancamento-bancario.component';

describe('LancamentoBancarioComponent', () => {
  let component: LancamentoBancarioComponent;
  let fixture: ComponentFixture<LancamentoBancarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LancamentoBancarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LancamentoBancarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
