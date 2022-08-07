import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdduserupdateComponent } from './adduserupdate.component';

describe('AdduserupdateComponent', () => {
  let component: AdduserupdateComponent;
  let fixture: ComponentFixture<AdduserupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdduserupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdduserupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
