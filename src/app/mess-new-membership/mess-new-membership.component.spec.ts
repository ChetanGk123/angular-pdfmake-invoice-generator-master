import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessNewMembershipComponent } from './mess-new-membership.component';

describe('MessNewMembershipComponent', () => {
  let component: MessNewMembershipComponent;
  let fixture: ComponentFixture<MessNewMembershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessNewMembershipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessNewMembershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
