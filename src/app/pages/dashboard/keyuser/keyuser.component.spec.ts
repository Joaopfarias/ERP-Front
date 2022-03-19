import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyuserComponent } from './keyuser.component';

describe('KeyuserComponent', () => {
  let component: KeyuserComponent;
  let fixture: ComponentFixture<KeyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
