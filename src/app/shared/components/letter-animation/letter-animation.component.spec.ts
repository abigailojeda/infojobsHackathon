import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterAnimationComponent } from './letter-animation.component';

describe('LetterAnimationComponent', () => {
  let component: LetterAnimationComponent;
  let fixture: ComponentFixture<LetterAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetterAnimationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetterAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
