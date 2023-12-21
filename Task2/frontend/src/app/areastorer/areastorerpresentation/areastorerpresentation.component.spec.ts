import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreastorerpresentationComponent } from './areastorerpresentation.component';

describe('AreastorerpresentationComponent', () => {
  let component: AreastorerpresentationComponent;
  let fixture: ComponentFixture<AreastorerpresentationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AreastorerpresentationComponent]
    });
    fixture = TestBed.createComponent(AreastorerpresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
