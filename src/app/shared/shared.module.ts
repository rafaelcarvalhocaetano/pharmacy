import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MenuComponent } from './menu/menu.component';
import { UserComponent } from './user/user.component';
import { SelectComponent } from './select/select.component';
import { ListMenuComponent } from './list-menu/list-menu.component';


@NgModule({
  declarations: [MenuComponent, UserComponent, SelectComponent, ListMenuComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    MenuComponent,
    UserComponent,
    SelectComponent,
    ListMenuComponent
  ]
})
export class SharedModule { }
