import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessRequesstComponent } from './success-requesst.component';

describe('SuccessRequesstComponent', () => {
  let component: SuccessRequesstComponent;
  let fixture: ComponentFixture<SuccessRequesstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessRequesstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessRequesstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
