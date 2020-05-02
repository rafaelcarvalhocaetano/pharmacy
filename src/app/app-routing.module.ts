import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: '**',
    component: PageNotFoundComponentComponent
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(login => login.LoginModule)
  },
  {
    path: 'remedy',
    loadChildren: () => import('./remedy/remedy.module').then(remedy => remedy.RemedyModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./my-cart/my-cart.module').then(cart => cart.MyCartModule)
  },
  {
    path: 'summary',
    loadChildren: () => import('./order-summary/order-summary.module').then(os => os.OrderSummaryModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
