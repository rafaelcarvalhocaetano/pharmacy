import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { listMenu } from '../../core/constants/menu_const';

@Component({
  selector: 'ifarm-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  @Output() public sendNumberRouter = new EventEmitter<number>();
  public listMenu = listMenu;

  public showMenu = false;

  openRouter(e: number) {
    this.sendNumberRouter.emit(e);
  }

}
