import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentstudComponent } from './currentstud.component';

describe('CurrentstudComponent', () => {
  let component: CurrentstudComponent;
  let fixture: ComponentFixture<CurrentstudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentstudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentstudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
