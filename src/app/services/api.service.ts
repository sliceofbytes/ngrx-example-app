import { BaseService } from './base.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService extends BaseService {
  constructor(
    http: HttpClient
  ) {
    super(http)
  }

  rootUrl() {
    return 'https://iot-sys.svgprod.ace.evry.services/api';
  }
}
