import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'ifarm-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  @Output() public sendNumberRouter = new EventEmitter<number>();
  @Input() public listMenu = [];

  public showMenu = false;

  openRouter(e: number) {
    this.sendNumberRouter.emit(e);
  }

}
