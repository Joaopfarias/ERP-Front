import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposPrecoComponent } from './tipos-preco.component';

describe('TiposPrecoComponent', () => {
  let component: TiposPrecoComponent;
  let fixture: ComponentFixture<TiposPrecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiposPrecoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposPrecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
