import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesligamentosComponent } from './desligamentos.component';

describe('DesligamentosComponent', () => {
  let component: DesligamentosComponent;
  let fixture: ComponentFixture<DesligamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesligamentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesligamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
