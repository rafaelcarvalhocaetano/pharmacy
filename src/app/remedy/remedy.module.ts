import { NgModule } from '@angular/core';

import { RemedyComponent } from './remedy.component';
import { ListRemedyComponent } from './list-remedy/list-remedy.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';


const remedyRouting: Routes = [
  {
    path: '',
    component: RemedyComponent,
    children: [
      {
        path: 'list-remedy',
        component: ListRemedyComponent
      }
    ]
  }
];


@NgModule({
  declarations: [
    RemedyComponent,
    ListRemedyComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(remedyRouting)
  ]
})
export class RemedyModule { }
