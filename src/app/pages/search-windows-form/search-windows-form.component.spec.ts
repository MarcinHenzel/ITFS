import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchWindowsFormComponent } from './search-windows-form.component';

describe('SearchWindowsFormComponent', () => {
  let component: SearchWindowsFormComponent;
  let fixture: ComponentFixture<SearchWindowsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchWindowsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchWindowsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
