import { DeviceStateModel } from './device-state.model';

export interface ErrorStateModel {
  code: number;
  message: string;
}

export interface DeviceModel {
  id: string;
  numId: number;
  lastConfigSendTime: string;
  lastErrorTime: Date;
  lastErrorStatus: ErrorStateModel;
  lastEventTime: Date;
  lastHeartbeatTime: Date;
  state: DeviceStateModel;
  decodedState: string;
}
