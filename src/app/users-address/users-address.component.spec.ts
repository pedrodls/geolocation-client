import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersAddressComponent } from './users-address.component';

describe('UsersAddressComponent', () => {
  let component: UsersAddressComponent;
  let fixture: ComponentFixture<UsersAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
