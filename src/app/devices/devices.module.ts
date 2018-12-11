import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { MatIconModule } from '@angular/material';

import { SharedModule } from '@app/shared';
import { environment } from '@env/environment';

import { DevicesRoutingModule } from './device-routing.module';

import { DevicesOverviewComponent } from './devices-overview.component';
import { DevicesComponent } from './devices.component';
import { DeviceService } from '@app/services/device-mgr.service';
import { MomentModule } from 'ngx-moment';
import { DeviceEffects } from './device.effects';
import {reducer} from './device.reducers';

@NgModule({
  imports: [
    SharedModule,
    MomentModule,

    DevicesRoutingModule,
    StoreModule.forFeature('devices', reducer),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: true
    }),
    EffectsModule.forFeature([
      DeviceEffects
    ]),

    MatIconModule,

  ],
  declarations: [
    DevicesComponent,
    DevicesOverviewComponent,
  ],
  providers: [DeviceService]
})
export class DevicesModule {
  constructor() { }
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    `${environment.i18nPrefix}/assets/i18n/examples/`,
    '.json'
  );
}
