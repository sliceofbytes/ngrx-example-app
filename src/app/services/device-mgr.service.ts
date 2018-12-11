import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { DeviceModel } from '@app/devices/models/device.model';

@Injectable({
  providedIn: 'root'
})
export class DeviceService extends ApiService {
  getDevices(): Observable<DeviceModel[]> {
    return this.http.get<DeviceModel[]>(this.rootUrl() + '/mgr/devices');
  }
}
