import {HttpClient} from '@angular/common/http';
import {
  Inject,
  Injectable
} from '@angular/core';
import {ICow} from '../../../util/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DashboardApiService {
  constructor(private _httpClient : HttpClient, @Inject('env') private environment : any
  ) {
  }

  addedCow(cow : ICow) {
    return this._httpClient.post<ICow>(`${this.environment.api}/cow/meat`, {...cow});
  }

  updatedCow(cow : ICow) {
    return this._httpClient.put<ICow>(`${this.environment.api}/cow/meat/${cow.id}`, {...cow});
  }
}
