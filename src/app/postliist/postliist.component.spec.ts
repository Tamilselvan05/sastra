import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostliistComponent } from './postliist.component';

describe('PostliistComponent', () => {
  let component: PostliistComponent;
  let fixture: ComponentFixture<PostliistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostliistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostliistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
