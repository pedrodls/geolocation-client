import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMarkerComponent } from './user-marker.component';

describe('UserMarkerComponent', () => {
  let component: UserMarkerComponent;
  let fixture: ComponentFixture<UserMarkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMarkerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMarkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
