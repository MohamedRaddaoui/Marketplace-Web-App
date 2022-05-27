import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllauctComponent } from './allauct.component';

describe('AllauctComponent', () => {
  let component: AllauctComponent;
  let fixture: ComponentFixture<AllauctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllauctComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllauctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
