import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TockenComponent } from './tocken.component';

describe('TockenComponent', () => {
  let component: TockenComponent;
  let fixture: ComponentFixture<TockenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TockenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TockenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
