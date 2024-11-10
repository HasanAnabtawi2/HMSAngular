import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserToRoleComponent } from './add-user-to-role.component';

describe('AddUserToRoleComponent', () => {
  let component: AddUserToRoleComponent;
  let fixture: ComponentFixture<AddUserToRoleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddUserToRoleComponent]
    });
    fixture = TestBed.createComponent(AddUserToRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
