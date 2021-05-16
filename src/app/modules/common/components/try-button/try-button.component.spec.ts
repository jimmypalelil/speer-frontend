import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TryButtonComponent } from './try-button.component';

describe('TryButtonComponent', () => {
  let component: TryButtonComponent;
  let fixture: ComponentFixture<TryButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TryButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TryButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
