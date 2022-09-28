import { Component } from '@angular/core';
import {LocalStorageService} from "ngx-driver";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cow';
  constructor(private readonly _localStorage: LocalStorageService) {
    _localStorage.setItem('token', '')
  }
}
