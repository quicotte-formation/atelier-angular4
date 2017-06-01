import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombopaysComponent } from './combopays.component';

describe('CombopaysComponent', () => {
  let component: CombopaysComponent;
  let fixture: ComponentFixture<CombopaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombopaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombopaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
