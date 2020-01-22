import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistCarFormComponent } from './dist-car-form.component';

describe('DistCarFormComponent', () => {
  let component: DistCarFormComponent;
  let fixture: ComponentFixture<DistCarFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistCarFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistCarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
