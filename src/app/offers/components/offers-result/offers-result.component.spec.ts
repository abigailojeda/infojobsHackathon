import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersResultComponent } from './offers-result.component';

describe('OffersResultComponent', () => {
  let component: OffersResultComponent;
  let fixture: ComponentFixture<OffersResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffersResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
