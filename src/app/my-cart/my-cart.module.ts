import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { MyCartComponent } from './my-cart.component';
import { SharedModule } from '../shared/shared.module';


const routesCart: Routes = [
  {
    path: '',
    component: MyCartComponent
  }
];


@NgModule({
  declarations: [
    MyCartComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routesCart)
  ]
})
export class MyCartModule { }
