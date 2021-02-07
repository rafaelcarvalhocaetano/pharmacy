import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ifarm-button-add',
  templateUrl: './button-add.component.html',
  styleUrls: ['./button-add.component.scss']
})
export class ButtonAddComponent {

  @Output() public onAddNewItem = new EventEmitter<any>();

}
