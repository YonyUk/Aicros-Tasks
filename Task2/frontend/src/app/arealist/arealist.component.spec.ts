import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArealistComponent } from './arealist.component';

describe('ArealistComponent', () => {
  let component: ArealistComponent;
  let fixture: ComponentFixture<ArealistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArealistComponent]
    });
    fixture = TestBed.createComponent(ArealistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
