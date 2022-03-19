import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyuserTiposDescansosComponent } from './keyuser-tipos-descansos.component';

describe('KeyuserTiposDescansosComponent', () => {
  let component: KeyuserTiposDescansosComponent;
  let fixture: ComponentFixture<KeyuserTiposDescansosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyuserTiposDescansosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyuserTiposDescansosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
