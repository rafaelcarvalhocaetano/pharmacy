import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './menu/menu.component';
import { UserComponent } from './user/user.component';
import { SelectComponent } from './select/select.component';
import { ListMenuComponent } from './list-menu/list-menu.component';
import { ButtonAddComponent } from './components/button-add/button-add.component';
import { ButtonSelectionComponent } from './components/button-selection/button-selection.component';


@NgModule({
  declarations: [MenuComponent, UserComponent, SelectComponent, ListMenuComponent, ButtonAddComponent, ButtonSelectionComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    MenuComponent,
    UserComponent,
    SelectComponent,
    ListMenuComponent,
    ButtonAddComponent,
    ButtonSelectionComponent
  ]
})
export class SharedModule { }
