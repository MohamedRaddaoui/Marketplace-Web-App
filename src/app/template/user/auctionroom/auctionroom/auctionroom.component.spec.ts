import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionroomComponent } from './auctionroom.component';

describe('AuctionroomComponent', () => {
  let component: AuctionroomComponent;
  let fixture: ComponentFixture<AuctionroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuctionroomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
