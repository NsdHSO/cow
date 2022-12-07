import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import {
  Inject,
  Injectable
} from '@angular/core';
import {
  NavigationEnd,
  Router
} from '@angular/router';
import {
  filter,
  Observable
} from 'rxjs';

@Injectable()
export class VariableInterceptor implements HttpInterceptor {

  constructor(
    @Inject('env') private _environment : any,
    private readonly _router : Router) {
  }

  intercept(request : HttpRequest<unknown>, next : HttpHandler) : Observable<HttpEvent<unknown>> {
    const path = this._router.url.split('/')[1];
    if(path !== '' && this._environment.featureFlags[path] !== undefined && !this._environment.featureFlags[path]) {
      this._router.navigate(['/']);
      throw new Error('DO not have allow');
    }
    return next.handle(request);
  }
}
