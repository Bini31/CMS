import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootuserComponent } from './rootuser.component';

describe('RootuserComponent', () => {
  let component: RootuserComponent;
  let fixture: ComponentFixture<RootuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RootuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RootuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
