import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNewspaperComponent } from './admin-newspaper.component';

describe('AdminNewspaperComponent', () => {
  let component: AdminNewspaperComponent;
  let fixture: ComponentFixture<AdminNewspaperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminNewspaperComponent]
    });
    fixture = TestBed.createComponent(AdminNewspaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
