import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelegViewComponent } from './deleg-view.component';

describe('DelegViewComponent', () => {
  let component: DelegViewComponent;
  let fixture: ComponentFixture<DelegViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelegViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelegViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
