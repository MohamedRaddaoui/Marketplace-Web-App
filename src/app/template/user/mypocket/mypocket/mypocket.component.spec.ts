import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MypocketComponent } from './mypocket.component';

describe('MypocketComponent', () => {
  let component: MypocketComponent;
  let fixture: ComponentFixture<MypocketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MypocketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MypocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
