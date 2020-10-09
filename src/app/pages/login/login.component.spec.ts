import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';
import { AuthService } from 'src/app/services/auth.service';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { UserState } from 'src/app/store/user/user.state';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Component, Input } from '@angular/core';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { By } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ErrorHandler } from 'src/app/interceptors/errors-handle.interceptor';
import { Token_Interceptor } from 'src/app/interceptors/token.interceptor';
import { MockApiRest } from 'src/app/interceptors/mock-api-rest.interceptor';

@Component({
  selector: 'mat-icon',
  template: '<span></span>'
})
class MockMatIconComponent {
  @Input() svgIcon: any;
  @Input() fontSet: any;
  @Input() fontIcon: any;
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        AngularMaterialModule,
        FlexLayoutModule,
        BrowserAnimationsModule,        
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule,
        NgxsModule.forRoot([UserState]),
        RouterTestingModule.withRoutes([
          {
            path: 'dashboard', 
            component: DashboardComponent
          }
        ]),
      ],
      declarations: [ LoginComponent, DashboardComponent ],
      providers:[
        AuthService,
        ErrorHandler,
        Token_Interceptor,
        MockApiRest
      ]
    }).overrideModule(MatIconModule, {
      remove: {
         declarations: [MatIcon],
         exports: [MatIcon]
      },
      add: {
          declarations: [MockMatIconComponent],
          exports: [MockMatIconComponent]
     }
     })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    location = TestBed.inject(Location);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('User sign in to app', fakeAsync(() => {
    fixture.detectChanges();
    const spy = spyOn(component, 'submit').and.callThrough();
    const inputs = fixture.debugElement.queryAll(By.css('input'));
    inputs[0].triggerEventHandler('input',{target:{value:'123456'}});
    inputs[1].triggerEventHandler('input',{target:{value:'1234'}});
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('button'));
    button.nativeElement.click();
    fixture.detectChanges();
    expect(inputs.length).toBeGreaterThanOrEqual(2);
    expect(spy).toHaveBeenCalled();
    tick();
    expect(location.path()).toBe('/dashboard');
  }));

});
