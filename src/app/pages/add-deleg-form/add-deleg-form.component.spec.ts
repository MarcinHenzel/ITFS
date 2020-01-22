import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDelegFormComponent } from './add-deleg-form.component';

describe('AddDelegFormComponent', () => {
  let component: AddDelegFormComponent;
  let fixture: ComponentFixture<AddDelegFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDelegFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDelegFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
