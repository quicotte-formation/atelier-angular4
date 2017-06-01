import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoundinputComponent } from './boundinput.component';

describe('BoundinputComponent', () => {
  let component: BoundinputComponent;
  let fixture: ComponentFixture<BoundinputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoundinputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoundinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
