import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuviewpostComponent } from './auviewpost.component';

describe('AuviewpostComponent', () => {
  let component: AuviewpostComponent;
  let fixture: ComponentFixture<AuviewpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuviewpostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuviewpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
