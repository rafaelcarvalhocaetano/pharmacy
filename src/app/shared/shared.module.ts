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
import { DndCardComponent } from './components/dnd-card/dnd-card.component';
import { FormsModule } from '@angular/forms';
import { AngularDraggableDirective } from './directives/draggable.directive';


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
    FormNewItemComponent,
    DndCardComponent,
    AngularDraggableDirective
  ],
  imports: [
    CommonModule,
    FormsModule    
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
    FormNewItemComponent,
    DndCardComponent,
    FormsModule,
    AngularDraggableDirective
  ]
})
export class SharedModule { }
