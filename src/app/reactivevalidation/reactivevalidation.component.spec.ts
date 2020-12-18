import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivevalidationComponent } from './reactivevalidation.component';

describe('ReactivevalidationComponent', () => {
  let component: ReactivevalidationComponent;
  let fixture: ComponentFixture<ReactivevalidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactivevalidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactivevalidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
