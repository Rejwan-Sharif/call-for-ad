import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorRegisterComponent } from './vendor-register.component';

describe('VendorRegisterComponent', () => {
  let component: VendorRegisterComponent;
  let fixture: ComponentFixture<VendorRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorRegisterComponent]
    });
    fixture = TestBed.createComponent(VendorRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
