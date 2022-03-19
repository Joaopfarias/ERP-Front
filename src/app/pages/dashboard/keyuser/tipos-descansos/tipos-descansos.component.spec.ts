import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposDescansosComponent } from './tipos-descansos.component';

describe('TiposDescansosComponent', () => {
  let component: TiposDescansosComponent;
  let fixture: ComponentFixture<TiposDescansosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiposDescansosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposDescansosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
