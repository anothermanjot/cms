import { Injectable } from '@angular/core';
import { fromEvent, Observable, from, of } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { DeviceDetectorService } from 'ngx-device-detector';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {

  constructor(private deviceService: DeviceDetectorService) {

   }

  isMobile(): boolean {

      return !this.deviceService.isDesktop();

  }
}
