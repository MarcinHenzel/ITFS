import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerAnsComponent } from './server-ans.component';

describe('ServerAnsComponent', () => {
  let component: ServerAnsComponent;
  let fixture: ComponentFixture<ServerAnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerAnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerAnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
