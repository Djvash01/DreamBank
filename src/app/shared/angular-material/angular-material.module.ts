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
    MatRippleModule
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
    MatRippleModule
  ],
})
export class AngularMaterialModule {}
