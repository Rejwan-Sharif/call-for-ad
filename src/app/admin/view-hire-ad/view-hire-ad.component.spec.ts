import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHireAdComponent } from './view-hire-ad.component';

describe('ViewHireAdComponent', () => {
  let component: ViewHireAdComponent;
  let fixture: ComponentFixture<ViewHireAdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewHireAdComponent]
    });
    fixture = TestBed.createComponent(ViewHireAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
