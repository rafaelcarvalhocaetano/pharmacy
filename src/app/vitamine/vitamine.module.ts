import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { VitamineComponent } from './vitamine.component';

const vitamineRouting: Routes = [
  {
    path: '',
    component: VitamineComponent,
  }
];

@NgModule({
  declarations: [VitamineComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(vitamineRouting)
  ]
})
export class VitamineModule { }
