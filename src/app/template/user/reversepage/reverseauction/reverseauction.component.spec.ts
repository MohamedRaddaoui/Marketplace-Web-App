import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReverseauctionComponent } from './reverseauction.component';

describe('ReverseauctionComponent', () => {
  let component: ReverseauctionComponent;
  let fixture: ComponentFixture<ReverseauctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReverseauctionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReverseauctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
