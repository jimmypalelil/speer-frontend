import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperiorSoundComponent } from './superior-sound.component';

describe('SuperiorSoundComponent', () => {
  let component: SuperiorSoundComponent;
  let fixture: ComponentFixture<SuperiorSoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperiorSoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperiorSoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
