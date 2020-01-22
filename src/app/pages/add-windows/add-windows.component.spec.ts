import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWindowsComponent } from './add-windows.component';

describe('AddWindowsComponent', () => {
  let component: AddWindowsComponent;
  let fixture: ComponentFixture<AddWindowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWindowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWindowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
