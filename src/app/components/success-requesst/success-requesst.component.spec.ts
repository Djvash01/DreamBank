import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { Location } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonHarness } from '@angular/material/button/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AccountSummaryComponent } from 'src/app/pages/account-summary/account-summary.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';

import { SuccessRequesstComponent } from './success-requesst.component';

fdescribe('SuccessRequesstComponent', () => {
  let component: SuccessRequesstComponent;
  let fixture: ComponentFixture<SuccessRequesstComponent>;
  let loader: HarnessLoader;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AngularMaterialModule,
        FlexLayoutModule,
        BrowserAnimationsModule,
        RouterTestingModule.withRoutes([
          {
            path: 'dashboard/accountSummary', 
            component: AccountSummaryComponent
          }
        ]),
      ],
      declarations: [ SuccessRequesstComponent, AccountSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessRequesstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
    location = TestBed.inject(Location);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Click into button go home', async () =>{
    const button = await loader.getHarness(MatButtonHarness);
    await button.click();
    expect(location.path()).toBe('/dashboard/accountSummary');
  });

  it('Show notification', async () => {
    let spy = spyOn(component,'showSuccessNotification').and.callThrough();
    const button = await loader.getHarness(MatButtonHarness);
    await button.click();
    fixture.detectChanges();
    await fixture.whenStable();
    expect(spy).toHaveBeenCalled();
  });
});
