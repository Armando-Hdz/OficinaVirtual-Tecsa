import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRolOperationComponent } from './add-rol-operation.component';

describe('AddRolOperationComponent', () => {
  let component: AddRolOperationComponent;
  let fixture: ComponentFixture<AddRolOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRolOperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRolOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
