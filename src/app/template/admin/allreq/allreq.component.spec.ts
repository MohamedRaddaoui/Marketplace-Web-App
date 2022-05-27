import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllreqComponent } from './allreq.component';

describe('AllreqComponent', () => {
  let component: AllreqComponent;
  let fixture: ComponentFixture<AllreqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllreqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllreqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
