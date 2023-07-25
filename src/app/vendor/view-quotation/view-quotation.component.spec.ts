import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewQuotationComponent } from './view-quotation.component';

describe('ViewQuotationComponent', () => {
  let component: ViewQuotationComponent;
  let fixture: ComponentFixture<ViewQuotationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewQuotationComponent]
    });
    fixture = TestBed.createComponent(ViewQuotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
