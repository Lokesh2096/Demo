import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBasicComponent } from './new-basic.component';

describe('NewBasicComponent', () => {
  let component: NewBasicComponent;
  let fixture: ComponentFixture<NewBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
