import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaststudComponent } from './paststud.component';

describe('PaststudComponent', () => {
  let component: PaststudComponent;
  let fixture: ComponentFixture<PaststudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaststudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaststudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
