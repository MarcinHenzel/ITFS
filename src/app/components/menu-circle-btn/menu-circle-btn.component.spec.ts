import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCircleBtnComponent } from './menu-circle-btn.component';

describe('MenuCircleBtnComponent', () => {
  let component: MenuCircleBtnComponent;
  let fixture: ComponentFixture<MenuCircleBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuCircleBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuCircleBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
