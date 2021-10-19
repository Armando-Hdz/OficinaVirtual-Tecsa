import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadRolOperationComponent } from './read-rol-operation.component';

describe('ReadRolOperationComponent', () => {
  let component: ReadRolOperationComponent;
  let fixture: ComponentFixture<ReadRolOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadRolOperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadRolOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
