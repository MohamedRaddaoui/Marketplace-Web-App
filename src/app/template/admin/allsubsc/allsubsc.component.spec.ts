import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllsubscComponent } from './allsubsc.component';

describe('AllsubscComponent', () => {
  let component: AllsubscComponent;
  let fixture: ComponentFixture<AllsubscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllsubscComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllsubscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
