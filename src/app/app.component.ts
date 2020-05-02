import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ifarm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private router: Router
  ) {}

  openRouter(e: number) {
    console.log(' number router ', e);
    switch (e) {
      case 4:
        this.router.navigate(['/remedy']);
        break;
      default:
        break;
    }
  }


}
