import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeelisttComponent } from './employeelistt.component';

describe('EmployeelisttComponent', () => {
  let component: EmployeelisttComponent;
  let fixture: ComponentFixture<EmployeelisttComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeelisttComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeelisttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
