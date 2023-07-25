import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoteAdComponent } from './promote-ad.component';

describe('PromoteAdComponent', () => {
  let component: PromoteAdComponent;
  let fixture: ComponentFixture<PromoteAdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromoteAdComponent]
    });
    fixture = TestBed.createComponent(PromoteAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
