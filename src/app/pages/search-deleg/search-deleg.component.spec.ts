import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDelegComponent } from './search-deleg.component';

describe('DelegViewComponent', () => {
  let component: SearchDelegComponent;
  let fixture: ComponentFixture<SearchDelegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchDelegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDelegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
