import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckPlantMixDesignComponent } from './check-plant-mix-design.component';

describe('CheckPlantMixDesignComponent', () => {
  let component: CheckPlantMixDesignComponent;
  let fixture: ComponentFixture<CheckPlantMixDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckPlantMixDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckPlantMixDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
