import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorHeaderComponent } from './vendor-header.component';

describe('VendorHeaderComponent', () => {
  let component: VendorHeaderComponent;
  let fixture: ComponentFixture<VendorHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorHeaderComponent]
    });
    fixture = TestBed.createComponent(VendorHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
