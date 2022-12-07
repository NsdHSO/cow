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
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbGllbiI6eyJpZCI6MSwibmFtZSI6InNvbHV0aW9uIiwiZW1haWwiOm51bGwsImxhYmVsIjpudWxsLCJyb2xlIjpudWxsLCJwYXNzd29yZCI6IiQyYiQxMyQ4a0tsdnQuV1BVanI4cnRQWU9GTVJ1RHA5SlAwazU4aGN5andtQVlkZFBrN0NKcEZLSmVJMiIsInRva2VuIjoiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmxiR2xsYmlJNmV5SnBaQ0k2TVN3aWJtRnRaU0k2SWsxcGFHRnBJRUoxYm1OcElpd2laVzFoYVd3aU9tNTFiR3dzSW5KdmJHVWlPbTUxYkd3c0luQmhjM04zYjNKa0lqb2lKREppSkRFekpERTFkV3BDYm1ZMlRGRjFhVVJYZHk5cmRWRmtkbVZpY1d4aE1rOWlZV2RIYlZsNmFVeEdVWGM0WVVKemRIWnhkV3g1YVRsTElpd2lkRzlyWlc0aU9pSmxlVXBvWWtkamFVOXBTa2xWZWtreFRtbEpjMGx1VWpWalEwazJTV3R3V0ZaRFNqa3VaWGxLYkdKSGJHeGlhVWsyWlhsS2NGcERTVFpOVTNkcFltMUdkRnBUU1RaSmF6RndZVWRHY0VsRlNqRmliVTV3U1dsM2FWcFhNV2hoVjNkcFQyMDFNV0pIZDNOSmJrcDJZa2RWYVU5dE5URmlSM2R6U1c1Q2FHTXpUak5pTTBwclNXcHZhVXBFU21sS1JFVjZTa1JGTVdSWGNFTmliVmt5VkVaR01XRlZVbGhrZVRseVpGWkdhMlJ0Vm1salYzaG9UV3M1YVZsWFpFaGlWbXcyWVZWNFIxVllZelJaVlVwNlpFaGFlR1JYZURWaFZHeE1TV2wzYVdSSE9YSmFWelJwVDIwMU1XSkhlRGxNUTBwd1dWaFJhVTlxUlRKT2FsRjZUMVJWTlUxNmFEa3VVVVJzUW1OS1IxTm5OVXBmTkhsWFkzcDJhbU5YZGxobFVuazBhbVIwZHpSbVZHZDBWV0V4TjJST09DSjlMQ0pwWVhRaU9qRTJOalExTWpVMU5UTjkueUlZR0M4cjZ6cnRKS0JucmR0OTF5dUNIaVlUV0hzZzRCcmMxVFlfRXBIZyIsImljb24iOm51bGx9LCJpYXQiOjE2NzAxMDUxMDZ9.5tOtbn3cCF3r8nuUo8lbJLBoxT0dGcWBJMDgp0R28JQ");
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
