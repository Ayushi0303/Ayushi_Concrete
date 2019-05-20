import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MixDescriptionsComponent } from './mix-descriptions.component';

describe('MixDescriptionsComponent', () => {
  let component: MixDescriptionsComponent;
  let fixture: ComponentFixture<MixDescriptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MixDescriptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MixDescriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
