import { Component, OnInit } from '@angular/core';
import { listMenu } from '../../core/constants/menu_const';

@Component({
  selector: 'ifarm-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public listMenu = listMenu;

  constructor() { }

  ngOnInit(): void {
  }

}
