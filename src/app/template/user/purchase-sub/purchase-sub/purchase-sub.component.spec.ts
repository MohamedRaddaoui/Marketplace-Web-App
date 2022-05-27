import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseSubComponent } from './purchase-sub.component';

describe('PurchaseSubComponent', () => {
  let component: PurchaseSubComponent;
  let fixture: ComponentFixture<PurchaseSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseSubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
