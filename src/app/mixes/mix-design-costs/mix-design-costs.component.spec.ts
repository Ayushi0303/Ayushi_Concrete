import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MixDesignCostsComponent } from './mix-design-costs.component';

describe('MixDesignCostsComponent', () => {
  let component: MixDesignCostsComponent;
  let fixture: ComponentFixture<MixDesignCostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MixDesignCostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MixDesignCostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
