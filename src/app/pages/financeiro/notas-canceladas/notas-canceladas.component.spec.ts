import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasCanceladasComponent } from './notas-canceladas.component';

describe('NotasCanceladasComponent', () => {
  let component: NotasCanceladasComponent;
  let fixture: ComponentFixture<NotasCanceladasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotasCanceladasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasCanceladasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
