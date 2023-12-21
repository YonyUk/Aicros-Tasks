import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveitemComponent } from './activeitem.component';

describe('ActiveitemComponent', () => {
  let component: ActiveitemComponent;
  let fixture: ComponentFixture<ActiveitemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActiveitemComponent]
    });
    fixture = TestBed.createComponent(ActiveitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
