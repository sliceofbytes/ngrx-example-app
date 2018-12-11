import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Store, select } from '@ngrx/store';
import { DeviceModel } from './models/device.model';

import { DeviceState } from './device.reducers';
import { ActionDevicesList } from './device.actions';
import { filter } from 'rxjs/operators';

@Component({
  templateUrl: './devices-overview.component.html',
  styleUrls: ['./devices-overview.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DevicesOverviewComponent implements OnInit {
  devices$: Observable<DeviceModel[]>;
  isLoading: Observable<boolean>;

  constructor(
    public store: Store<DeviceState>,
  ) {
    this.devices$ = this.store.pipe(select(state => state.items));

    this.isLoading = this.store.pipe(select('loading'), filter(i => i !== undefined));
    this.isLoading.subscribe(i => {console.log(i)})
  }

  ngOnInit() {
    this.store.dispatch(new ActionDevicesList({}))
  }

  decodeState(d: DeviceModel): void {
    if (d.state === undefined) {
      return;
    }

    try {
      d.decodedState = atob(d.state.binaryData);
    } catch {
    }
  }
}
