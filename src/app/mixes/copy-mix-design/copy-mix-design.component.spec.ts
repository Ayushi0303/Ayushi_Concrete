import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyMixDesignComponent } from './copy-mix-design.component';

describe('CopyMixDesignComponent', () => {
  let component: CopyMixDesignComponent;
  let fixture: ComponentFixture<CopyMixDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopyMixDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyMixDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
