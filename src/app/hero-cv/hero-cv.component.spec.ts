import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroCVComponent } from './hero-cv.component';

describe('HeroCVComponent', () => {
  let component: HeroCVComponent;
  let fixture: ComponentFixture<HeroCVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroCVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroCVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
