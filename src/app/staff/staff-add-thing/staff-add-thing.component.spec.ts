import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffAddThingComponent } from './staff-add-thing.component';

describe('StaffAddThingComponent', () => {
  let component: StaffAddThingComponent;
  let fixture: ComponentFixture<StaffAddThingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffAddThingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffAddThingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
