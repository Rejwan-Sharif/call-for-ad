import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetQuotationComponent } from './get-quotation.component';

describe('GetQuotationComponent', () => {
  let component: GetQuotationComponent;
  let fixture: ComponentFixture<GetQuotationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetQuotationComponent]
    });
    fixture = TestBed.createComponent(GetQuotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
