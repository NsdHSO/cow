import {
  Component,
  OnInit,
} from "@angular/core";
import {LocalStorageService} from "ngx-driver";
import {HttpInterceptorService} from "./utils/http-interceptor.service";

@Component({
             selector: "app-root",
             templateUrl: "./app.component.html",
             styleUrls: ["./app.component.scss"],
           })
export class AppComponent implements OnInit {
  title = "cow";

  constructor(
    private readonly _localStorage : LocalStorageService,
    private _httpInter : HttpInterceptorService,
  ) {
    _localStorage.setItem(
      "token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbGllbiI6eyJpZCI6OSwibmFtZSI6Ik1paGFpIEJ1bmNzczExMWkiLCJlbWFpbCI6bnVsbCwibGFiZWwiOm51bGwsInJvbGUiOm51bGwsInBhc3N3b3JkIjoiJDJiJDEzJHFhbnRjQ243dVJpRkM2d3pJVFlmWS5EY2NXZWM2RkhxbEhJbGczMjdlWG11aDNwWTNzTTB5IiwidG9rZW4iOm51bGwsImljb24iOm51bGx9LCJpYXQiOjE2NjY0Mzg0Mjh9.IA7zSW_P7KaPb3KHza8lYRj4IHBbo00qjDPwuq4HjMs");
  }

  public ngOnInit() : void {
    this._httpInter.getUser()
      .subscribe((user : any) => {
        this._localStorage.setItem(
          "permission",
          JSON.stringify({inbox: user.permission.inbox}));
      });
  }
}
