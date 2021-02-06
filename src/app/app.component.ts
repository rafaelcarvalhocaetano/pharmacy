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
