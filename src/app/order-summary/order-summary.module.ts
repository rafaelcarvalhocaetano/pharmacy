import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderSummaryComponent } from './order-summary.component';
import { SharedModule } from '../shared/shared.module';

const routesOrderSummary: Routes = [
  {
    path: '',
    component: OrderSummaryComponent
  }
];

@NgModule({
  declarations: [OrderSummaryComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routesOrderSummary)
  ]
})
export class OrderSummaryModule { }
