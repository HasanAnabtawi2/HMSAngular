import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGuestComponent } from './edit-guest.component';

describe('EditGuestComponent', () => {
  let component: EditGuestComponent;
  let fixture: ComponentFixture<EditGuestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditGuestComponent]
    });
    fixture = TestBed.createComponent(EditGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});