import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { NewProductComponent } from '../../components/new-product/new-product.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuccessRequesstComponent } from '../../components/success-requesst/success-requesst.component';


@NgModule({
  declarations: [ProductsComponent, NewProductComponent, SuccessRequesstComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FlexLayoutModule,
    AngularMaterialModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
