import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandeiraComponent } from './bandeira.component';

describe('BandeiraComponent', () => {
  let component: BandeiraComponent;
  let fixture: ComponentFixture<BandeiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BandeiraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BandeiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
