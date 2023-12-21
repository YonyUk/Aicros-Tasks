import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivecreatorComponent } from './activecreator.component';

describe('ActivecreatorComponent', () => {
  let component: ActivecreatorComponent;
  let fixture: ComponentFixture<ActivecreatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActivecreatorComponent]
    });
    fixture = TestBed.createComponent(ActivecreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
