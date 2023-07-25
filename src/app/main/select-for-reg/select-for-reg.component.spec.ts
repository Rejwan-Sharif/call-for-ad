import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectForRegComponent } from './select-for-reg.component';

describe('SelectForRegComponent', () => {
  let component: SelectForRegComponent;
  let fixture: ComponentFixture<SelectForRegComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectForRegComponent]
    });
    fixture = TestBed.createComponent(SelectForRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
