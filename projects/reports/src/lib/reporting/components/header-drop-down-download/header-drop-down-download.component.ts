import {Component, EventEmitter, Input, Output} from "@angular/core";
import {ISelectionState} from "../../utils/interface/ISelection-state";

@Component({
             selector   : "lib-header-drop-down-download",
             templateUrl: "./header-drop-down-download.component.html",
             styleUrls  : ["./header-drop-down-download.component.scss"],
           })
export class HeaderDropDownDownloadComponent {
  @Output()
  onDownload : EventEmitter<any>     = new EventEmitter<any>();
  @Input()
  public options : ISelectionState[] = [] as ISelectionState[];

  public actionDownload() {
    this.onDownload.next({});
  }
}
