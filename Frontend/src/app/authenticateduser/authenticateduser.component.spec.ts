import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticateduserComponent } from './authenticateduser.component';

describe('AuthenticateduserComponent', () => {
  let component: AuthenticateduserComponent;
  let fixture: ComponentFixture<AuthenticateduserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthenticateduserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticateduserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
