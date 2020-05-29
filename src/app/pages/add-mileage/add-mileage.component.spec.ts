import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddMileageComponent } from './add-mileage.component';

describe('DistCarFormComponent', () => {
  let component: AddMileageComponent;
  let fixture: ComponentFixture<AddMileageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMileageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMileageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
