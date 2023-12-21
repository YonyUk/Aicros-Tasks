import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreapresentationComponent } from './areapresentation.component';

describe('AreapresentationComponent', () => {
  let component: AreapresentationComponent;
  let fixture: ComponentFixture<AreapresentationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AreapresentationComponent]
    });
    fixture = TestBed.createComponent(AreapresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
