import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivestorerComponent } from './activestorer.component';

describe('ActivestorerComponent', () => {
  let component: ActivestorerComponent;
  let fixture: ComponentFixture<ActivestorerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActivestorerComponent]
    });
    fixture = TestBed.createComponent(ActivestorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
