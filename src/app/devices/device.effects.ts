import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { DeviceService } from '@app/services/device-mgr.service';
import { Action } from '@ngrx/store';
import { ActionDevicesListDone, DeviceActionTypes } from './device.actions';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

@Injectable()
export class DeviceEffects {
  constructor(private actions$: Actions, private deviceService: DeviceService) {
  }

  @Effect()
  loadDevices$: Observable<Action> = this.actions$.pipe(
    ofType(DeviceActionTypes.LIST),
    switchMap(q => {
      return this.deviceService.getDevices().pipe(
        map(i => new ActionDevicesListDone({ items: i }))
      );
    })
  );
}
