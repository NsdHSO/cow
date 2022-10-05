import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
             selector   : "lib-card-todo",
             templateUrl: "./card-todo.component.html",
             styleUrls  : ["./card-todo.component.scss"],
           })
export class CardTodoComponent {
  @Input()
  public isNew                            = false;
  @Input()
  public ranting                          = false;
  @Input()
  public checked                          = false;
  @Input()
  public description                      = "asdasdasd";
  @Input()
  public id                               = 0;
  @Output()
  actionEvent : EventEmitter<any>         = new EventEmitter<any>();
  @Output()
  descriptionNewEvent : EventEmitter<any> = new EventEmitter<any>();

  public makeEvent($event : any) {
    if($event.rating !== undefined) {
      this._setRanting($event);
    }
    this.actionEvent.next($event);
  }

  public setDescription() : void {
    this.descriptionNewEvent.next(this.description);
  }

  private _setRanting($event : any) : void {
    this.ranting  = !this.ranting;
    $event.rating = this.ranting;
  }
}
