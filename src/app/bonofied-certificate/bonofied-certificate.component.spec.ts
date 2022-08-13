import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonofiedCertificateComponent } from './bonofied-certificate.component';

describe('BonofiedCertificateComponent', () => {
  let component: BonofiedCertificateComponent;
  let fixture: ComponentFixture<BonofiedCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonofiedCertificateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BonofiedCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
