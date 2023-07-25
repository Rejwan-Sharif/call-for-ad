import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdUpdateComponent } from './ad-update.component';

describe('AdUpdateComponent', () => {
  let component: AdUpdateComponent;
  let fixture: ComponentFixture<AdUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdUpdateComponent]
    });
    fixture = TestBed.createComponent(AdUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
