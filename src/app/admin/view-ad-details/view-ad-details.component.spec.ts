import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAdDetailsComponent } from './view-ad-details.component';

describe('ViewAdDetailsComponent', () => {
  let component: ViewAdDetailsComponent;
  let fixture: ComponentFixture<ViewAdDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAdDetailsComponent]
    });
    fixture = TestBed.createComponent(ViewAdDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
