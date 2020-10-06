import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';




@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    MatButtonModule,
    MatIconModule, 
    MatDividerModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    MatButtonModule, 
    MatIconModule, 
    MatDividerModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],
})
export class AngularMaterialModule {}
