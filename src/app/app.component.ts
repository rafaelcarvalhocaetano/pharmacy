import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from './core/services/menu-service/menu.service';

@Component({
  selector: 'ifarm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public listMenuItems = []

  constructor(
    private router: Router,
    private menuService: MenuService
  ) {}


  ngOnInit(): void {
    this.menuService.getMenu().subscribe(responseMenu => this.listMenuItems = responseMenu)
  }

  openRouter(e: number) {
    switch (e) {
      case 1:
        return this.router.navigate(['/remedy']);
      case 2:
        return this.router.navigate(['/vitamine']);
      case 3:
        return this.router.navigate(['/cosmetics']);
      case 4:
        return this.router.navigate(['/summary']);
    }
  }


}
