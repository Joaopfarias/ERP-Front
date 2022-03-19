import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GruposSociaisComponent } from './grupos-sociais.component';

describe('GruposSociaisComponent', () => {
  let component: GruposSociaisComponent;
  let fixture: ComponentFixture<GruposSociaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GruposSociaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GruposSociaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
