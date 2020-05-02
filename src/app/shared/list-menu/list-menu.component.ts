import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Menu } from '../../core/model/menu';

@Component({
  selector: 'ifarm-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.scss']
})
export class ListMenuComponent {

  @Input() public listMenu: Menu[] = [];
  @Output() public openRouter = new EventEmitter<number>();
}
