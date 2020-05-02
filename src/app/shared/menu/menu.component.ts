import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { listMenu } from '../../core/constants/menu_const';

@Component({
  selector: 'rmd-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {


  @Output() public openMenu = new EventEmitter<boolean>();

  public listMenu = listMenu;
  public showMenu = false;

  constructor() { }

  ngOnInit(): void {
  }

}
