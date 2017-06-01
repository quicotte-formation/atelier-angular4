import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmformComponent } from './filmform.component';

describe('FilmformComponent', () => {
  let component: FilmformComponent;
  let fixture: ComponentFixture<FilmformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
