import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveUserFromRoleComponent } from './remove-user-from-role.component';

describe('RemoveUserFromRoleComponent', () => {
  let component: RemoveUserFromRoleComponent;
  let fixture: ComponentFixture<RemoveUserFromRoleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemoveUserFromRoleComponent]
    });
    fixture = TestBed.createComponent(RemoveUserFromRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
