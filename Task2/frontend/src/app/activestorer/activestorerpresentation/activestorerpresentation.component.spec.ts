import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivestorerpresentationComponent } from './activestorerpresentation.component';

describe('ActivestorerpresentationComponent', () => {
  let component: ActivestorerpresentationComponent;
  let fixture: ComponentFixture<ActivestorerpresentationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActivestorerpresentationComponent]
    });
    fixture = TestBed.createComponent(ActivestorerpresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
