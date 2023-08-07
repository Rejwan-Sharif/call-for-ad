import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HireAdComponent } from './hire-ad.component';

describe('HireAdComponent', () => {
  let component: HireAdComponent;
  let fixture: ComponentFixture<HireAdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HireAdComponent]
    });
    fixture = TestBed.createComponent(HireAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
