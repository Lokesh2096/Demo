import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveTrailComponent } from './reactive-trail.component';

describe('ReactiveTrailComponent', () => {
  let component: ReactiveTrailComponent;
  let fixture: ComponentFixture<ReactiveTrailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveTrailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveTrailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
