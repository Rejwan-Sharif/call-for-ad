import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintInvoiceComponent } from './print-invoice.component';

describe('PrintInvoiceComponent', () => {
  let component: PrintInvoiceComponent;
  let fixture: ComponentFixture<PrintInvoiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrintInvoiceComponent]
    });
    fixture = TestBed.createComponent(PrintInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
