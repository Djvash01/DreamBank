import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatRippleModule} from '@angular/material/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';




@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    MatButtonModule,
    MatIconModule, 
    MatDividerModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatListModule,
    MatRippleModule,
    MatToolbarModule,
    MatBadgeModule,
    MatMenuModule,
    MatTableModule
  ],
  exports: [
    MatButtonModule, 
    MatIconModule, 
    MatDividerModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatListModule,
    MatRippleModule,
    MatToolbarModule,
    MatBadgeModule,
    MatMenuModule,
    MatTableModule
  ],
})
export class AngularMaterialModule {}
