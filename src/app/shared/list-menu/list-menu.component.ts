import { Component, Input } from '@angular/core';
import { Menu } from '../../core/model/menu';

@Component({
  selector: 'rmd-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.scss']
})
export class ListMenuComponent {

  @Input() public listMenu: Menu[] = [];
}
