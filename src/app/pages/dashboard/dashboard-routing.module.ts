import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { AccountSummaryComponent } from '../account-summary/account-summary.component';

import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { 
    path: '',
    canActivate: [AuthGuard], 
    component: DashboardComponent,
    children:[
      {
        path: 'accountSummary',
        component: AccountSummaryComponent
      }
    ] 
  },
  { path: 'products', loadChildren: () => import('../products/products.module').then(m => m.ProductsModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
