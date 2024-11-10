import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUsersInRoleComponent } from './show-users-in-role.component';

describe('ShowUsersInRoleComponent', () => {
  let component: ShowUsersInRoleComponent;
  let fixture: ComponentFixture<ShowUsersInRoleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowUsersInRoleComponent]
    });
    fixture = TestBed.createComponent(ShowUsersInRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
