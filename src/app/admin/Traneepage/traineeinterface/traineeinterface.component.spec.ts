import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeinterfaceComponent } from './traineeinterface.component';

describe('TraineeinterfaceComponent', () => {
  let component: TraineeinterfaceComponent;
  let fixture: ComponentFixture<TraineeinterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraineeinterfaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineeinterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
