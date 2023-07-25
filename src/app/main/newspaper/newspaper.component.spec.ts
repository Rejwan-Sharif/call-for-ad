import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewspaperComponent } from './newspaper.component';

describe('NewspaperComponent', () => {
  let component: NewspaperComponent;
  let fixture: ComponentFixture<NewspaperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewspaperComponent]
    });
    fixture = TestBed.createComponent(NewspaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
