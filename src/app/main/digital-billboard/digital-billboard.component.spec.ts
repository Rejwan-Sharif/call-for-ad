import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalBillboardComponent } from './digital-billboard.component';

describe('DigitalBillboardComponent', () => {
  let component: DigitalBillboardComponent;
  let fixture: ComponentFixture<DigitalBillboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DigitalBillboardComponent]
    });
    fixture = TestBed.createComponent(DigitalBillboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
