import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionSimpleComponent } from './region-simple.component';

describe('RegionSimpleComponent', () => {
  let component: RegionSimpleComponent;
  let fixture: ComponentFixture<RegionSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionSimpleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegionSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
