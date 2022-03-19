import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GruposPrecoComponent } from './grupos-preco.component';

describe('GruposPrecoComponent', () => {
  let component: GruposPrecoComponent;
  let fixture: ComponentFixture<GruposPrecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GruposPrecoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GruposPrecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
