import { Component } from '@angular/core';

@Component({
  selector: 'rmd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public open = false;

  public showMenu(e: boolean) {
    this.open = e;
  }
}
