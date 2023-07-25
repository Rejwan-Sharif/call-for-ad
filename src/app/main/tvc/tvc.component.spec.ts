import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvcComponent } from './tvc.component';

describe('TvcComponent', () => {
  let component: TvcComponent;
  let fixture: ComponentFixture<TvcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TvcComponent]
    });
    fixture = TestBed.createComponent(TvcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
