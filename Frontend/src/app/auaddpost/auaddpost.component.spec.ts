import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuaddpostComponent } from './auaddpost.component';

describe('AuaddpostComponent', () => {
  let component: AuaddpostComponent;
  let fixture: ComponentFixture<AuaddpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuaddpostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuaddpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
