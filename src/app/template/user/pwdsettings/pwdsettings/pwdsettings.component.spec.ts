import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwdsettingsComponent } from './pwdsettings.component';

describe('PwdsettingsComponent', () => {
  let component: PwdsettingsComponent;
  let fixture: ComponentFixture<PwdsettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PwdsettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PwdsettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
