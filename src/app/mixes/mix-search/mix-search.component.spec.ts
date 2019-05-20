import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MixSearchComponent } from './mix-search.component';

describe('MixSearchComponent', () => {
  let component: MixSearchComponent;
  let fixture: ComponentFixture<MixSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MixSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MixSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
