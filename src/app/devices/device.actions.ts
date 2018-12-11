import { Action } from '@ngrx/store';
import { DeviceModel } from './models/device.model';

export enum DeviceActionTypes {
  UPSERT_ONE = '[Devices] Upsert One',
  DELETE_ONE = '[Devices] Delete One',
  LIST = '[Devices] List',
  LIST_DONE = '[Devices] List Done'
}

export class ActionDevicesUpsertOne implements Action {
  readonly type = DeviceActionTypes.UPSERT_ONE;
  constructor(readonly payload: { device: DeviceModel }) { }
}

export class ActionDevicesDeleteOne implements Action {
  readonly type = DeviceActionTypes.DELETE_ONE;
  constructor(readonly payload: { id: string }) { }
}

export class ActionDevicesList implements Action {
  readonly type = DeviceActionTypes.LIST;
  constructor(readonly payload: {}) { }
}

export class ActionDevicesListDone implements Action {
  readonly type = DeviceActionTypes.LIST_DONE;
  constructor(readonly payload: { items: DeviceModel[] }) { }
}

export type DeviceActions =
  ActionDevicesUpsertOne |
  ActionDevicesDeleteOne |
  ActionDevicesList |
  ActionDevicesListDone;
