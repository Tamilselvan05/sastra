import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PststudpostComponent } from './pststudpost.component';

describe('PststudpostComponent', () => {
  let component: PststudpostComponent;
  let fixture: ComponentFixture<PststudpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PststudpostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PststudpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
