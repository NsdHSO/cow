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
    _localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbGllbiI6eyJpZCI6MSwibmFtZSI6Ik1paGFpIEJ1bmNpIiwiZW1haWwiOm51bGwsInJvbGUiOm51bGwsInBhc3N3b3JkIjoiJDJiJDEzJDE1dWpCbmY2TFF1aURXdy9rdVFkdmVicWxhMk9iYWdHbVl6aUxGUXc4YUJzdHZxdWx5aTlLIiwidG9rZW4iOm51bGx9LCJpYXQiOjE2NjQzOTU5Mzh9.QDlBcJGSg5J_4yWczvjcWvXeRy4jdtw4fTgtUa17dN8')
  }
}
