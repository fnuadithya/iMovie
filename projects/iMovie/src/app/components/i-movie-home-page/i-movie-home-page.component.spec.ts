import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IMovieHomePageComponent } from './i-movie-home-page.component';

describe('IMovieHomePageComponent', () => {
  let component: IMovieHomePageComponent;
  let fixture: ComponentFixture<IMovieHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IMovieHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IMovieHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
