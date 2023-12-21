import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreastorerComponent } from './areastorer.component';

describe('AreastorerComponent', () => {
  let component: AreastorerComponent;
  let fixture: ComponentFixture<AreastorerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AreastorerComponent]
    });
    fixture = TestBed.createComponent(AreastorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
