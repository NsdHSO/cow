import {Component, EventEmitter, Output} from "@angular/core";

@Component({
             selector   : "lib-header-drop-down-download",
             templateUrl: "./header-drop-down-download.component.html",
             styleUrls  : ["./header-drop-down-download.component.scss"],
           })
export class HeaderDropDownDownloadComponent {
  @Output()
  onDownload : EventEmitter<any> = new EventEmitter<any>();

  public actionDownload() {
    this.onDownload.next({});
  }
}
