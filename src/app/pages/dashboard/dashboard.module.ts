import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MenuComponent } from '../../components/menu/menu.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SessionToolbarComponent } from '../../components/session-toolbar/session-toolbar.component';


@NgModule({
  declarations: [DashboardComponent, MenuComponent, SessionToolbarComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AngularMaterialModule,
    FlexLayoutModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule { }
