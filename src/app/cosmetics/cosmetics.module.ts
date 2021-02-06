import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CosmeticsComponent } from './cosmetics.component';
import { SharedModule } from '../shared/shared.module';


const cosmeticRouting: Routes = [
  {
    path: '',
    component: CosmeticsComponent,
  }
];


@NgModule({
  declarations: [CosmeticsComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(cosmeticRouting)
  ]
})
export class CosmeticsModule { }
