import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './menu/menu.component';
import { UserComponent } from './user/user.component';
import { SelectComponent } from './select/select.component';
import { ListMenuComponent } from './list-menu/list-menu.component';
import { ButtonAddComponent } from './components/button-add/button-add.component';
import { ButtonSelectionComponent } from './components/button-selection/button-selection.component';
import { ButtonSelectOptionComponent } from './components/button-select-option/button-select-option.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { ModalComponent } from './components/modal/modal.component';
import { FormNewItemComponent } from './form-new-item/form-new-item.component';


@NgModule({
  declarations: [
    MenuComponent,
    UserComponent,
    SelectComponent,
    ListMenuComponent,
    ButtonAddComponent,
    ButtonSelectionComponent,
    ButtonSelectOptionComponent,
    CardListComponent,
    ModalComponent,
    FormNewItemComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CommonModule,
    MenuComponent,
    UserComponent,
    SelectComponent,
    ListMenuComponent,
    ButtonAddComponent,
    ButtonSelectionComponent,
    ButtonSelectOptionComponent,
    CardListComponent,
    ModalComponent,
    FormNewItemComponent
  ]
})
export class SharedModule { }
