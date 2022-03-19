import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposSociaisComponent } from './tipos-sociais.component';

describe('TiposSociaisComponent', () => {
  let component: TiposSociaisComponent;
  let fixture: ComponentFixture<TiposSociaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiposSociaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposSociaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
