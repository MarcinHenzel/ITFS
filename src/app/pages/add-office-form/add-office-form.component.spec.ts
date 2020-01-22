import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOfficeFormComponent } from './add-office-form.component';

describe('AddOfficeFormComponent', () => {
  let component: AddOfficeFormComponent;
  let fixture: ComponentFixture<AddOfficeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOfficeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOfficeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
