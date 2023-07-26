import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPromotionComponent } from './show-promotion.component';

describe('ShowPromotionComponent', () => {
  let component: ShowPromotionComponent;
  let fixture: ComponentFixture<ShowPromotionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowPromotionComponent]
    });
    fixture = TestBed.createComponent(ShowPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
