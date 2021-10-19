import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadRolComponent } from './read-rol.component';

describe('ReadRolComponent', () => {
  let component: ReadRolComponent;
  let fixture: ComponentFixture<ReadRolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadRolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
