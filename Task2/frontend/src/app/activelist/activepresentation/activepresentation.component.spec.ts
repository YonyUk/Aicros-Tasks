import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivepresentationComponent } from './activepresentation.component';

describe('ActivepresentationComponent', () => {
  let component: ActivepresentationComponent;
  let fixture: ComponentFixture<ActivepresentationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActivepresentationComponent]
    });
    fixture = TestBed.createComponent(ActivepresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
