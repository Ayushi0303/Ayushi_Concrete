import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MixMaterialListingComponent } from './mix-material-listing.component';

describe('MixMaterialListingComponent', () => {
  let component: MixMaterialListingComponent;
  let fixture: ComponentFixture<MixMaterialListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MixMaterialListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MixMaterialListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
