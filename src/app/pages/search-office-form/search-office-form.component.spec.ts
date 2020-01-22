import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchOfficeFormComponent } from './search-office-form.component';

describe('SearchOfficeFormComponent', () => {
  let component: SearchOfficeFormComponent;
  let fixture: ComponentFixture<SearchOfficeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchOfficeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchOfficeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
