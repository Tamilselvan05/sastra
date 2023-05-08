import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaststudlistComponent } from './paststudlist.component';

describe('PaststudlistComponent', () => {
  let component: PaststudlistComponent;
  let fixture: ComponentFixture<PaststudlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaststudlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaststudlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
