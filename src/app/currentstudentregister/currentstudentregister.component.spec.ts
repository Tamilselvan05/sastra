import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentstudentregisterComponent } from './currentstudentregister.component';

describe('CurrentstudentregisterComponent', () => {
  let component: CurrentstudentregisterComponent;
  let fixture: ComponentFixture<CurrentstudentregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentstudentregisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentstudentregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
