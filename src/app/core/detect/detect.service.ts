import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DetectService {

  constructor(
    @Inject(PLATFORM_ID) private platformId: string
  ) { }

  public isPlatformBrowser() {
    return isPlatformBrowser(this.platformId);
  }
}
