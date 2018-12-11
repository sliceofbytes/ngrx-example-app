import { DeviceModel } from './models/device.model';
import { DeviceActions, DeviceActionTypes } from './device.actions';

export interface DeviceState {
  loading: boolean,
  items: DeviceModel[]
}

const initialState: DeviceState = {
  loading: false,
  items: []
}

export function reducer(state = initialState, action: DeviceActions) {
  switch (action.type) {
    case DeviceActionTypes.LIST: {
      return {
        ...state,
        loading: true,
      }
    }
    case DeviceActionTypes.LIST_DONE: {
      return {
        ...state,
        loading: false,
        items: action.payload
      }
    }
    default: {
      return state;
    }
  }
}
