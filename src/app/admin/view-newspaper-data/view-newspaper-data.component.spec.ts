import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNewspaperDataComponent } from './view-newspaper-data.component';

describe('ViewNewspaperDataComponent', () => {
  let component: ViewNewspaperDataComponent;
  let fixture: ComponentFixture<ViewNewspaperDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewNewspaperDataComponent]
    });
    fixture = TestBed.createComponent(ViewNewspaperDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
