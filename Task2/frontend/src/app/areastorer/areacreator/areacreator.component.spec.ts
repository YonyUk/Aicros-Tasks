import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreacreatorComponent } from './areacreator.component';

describe('AreacreatorComponent', () => {
  let component: AreacreatorComponent;
  let fixture: ComponentFixture<AreacreatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AreacreatorComponent]
    });
    fixture = TestBed.createComponent(AreacreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
