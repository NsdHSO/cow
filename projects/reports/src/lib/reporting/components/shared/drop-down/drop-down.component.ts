import {Component, EventEmitter, Input, Output} from "@angular/core";
import {ISelectionState} from "../../../utils/interface/ISelection-state";

@Component({
             selector   : "lib-drop-down",
             templateUrl: "./drop-down.component.html",
             styleUrls  : ["./drop-down.component.scss"],
           })
export class DropDownComponent {
  @Output()
  selectOption : EventEmitter<string> = new EventEmitter<string>();
  @Input()
  options : ISelectionState[]         = [] as ISelectionState[];
  @Input()
  disabledText                        = "";
  selectText                          = "";

  public select() {
    this.selectOption.next(this.selectText);
  }
}
