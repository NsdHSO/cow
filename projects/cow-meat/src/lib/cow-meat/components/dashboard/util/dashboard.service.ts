import {Injectable} from '@angular/core';
import {ICow} from '../../../util/interfaces';
import {DashboardApiService} from './dashboard.api.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private _dashboardApiService : DashboardApiService) {}

  public addedNewCow(cow : ICow) {
    return this._dashboardApiService.addedCow(cow);
  }

  public updatedCow(cow : ICow) {
    return this._dashboardApiService.updatedCow(cow);
  }
}
