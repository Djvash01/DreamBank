import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewProductComponent } from 'src/app/components/new-product/new-product.component';
import { SuccessRequesstComponent } from 'src/app/components/success-requesst/success-requesst.component';
import { AuthGuard } from 'src/app/guards/auth.guard';

import { ProductsComponent } from './products.component';

const routes: Routes = [
  { 
    path: '',
    canActivate: [AuthGuard],  
    component: ProductsComponent,
    children: [
      {
        path: 'newProduct', 
        component: NewProductComponent, 
      },
      {
        path: 'success', 
        component: SuccessRequesstComponent,
      }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
