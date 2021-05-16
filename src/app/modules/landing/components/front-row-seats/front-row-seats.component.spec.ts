import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontRowSeatsComponent } from './front-row-seats.component';

describe('FrontRowSeatsComponent', () => {
  let component: FrontRowSeatsComponent;
  let fixture: ComponentFixture<FrontRowSeatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontRowSeatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontRowSeatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
