import { ComponentFixture, TestBed } from '@angular/core/testing';

import { textInputComponent } from './textInput.component';

describe('CommentsComponent', () => {
  let component: textInputComponent;
  let fixture: ComponentFixture<textInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ textInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(textInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
