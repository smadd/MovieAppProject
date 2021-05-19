import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieRuntimeComponent } from './movie-runtime.component';

describe('MovieRuntimeComponent', () => {
  let component: MovieRuntimeComponent;
  let fixture: ComponentFixture<MovieRuntimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieRuntimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieRuntimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
