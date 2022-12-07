import {
  CdkDragDrop,
  moveItemInArray
} from '@angular/cdk/drag-drop';
import {
  Component,
  HostListener,
  OnDestroy,
  OnInit
} from '@angular/core';
import {
  Subject,
  takeUntil
} from 'rxjs';
import {IToDo} from './util/IToDo';
import {ToDoService} from './util/to-do.service';

@Component({
  selector: 'lib-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit, OnDestroy {
  todos = [] as IToDo[];
  description = '';
  private $destroyed : Subject<any> = new Subject<any>();

  constructor(private readonly _toDoService : ToDoService) { }

  ngOnInit() : void {
    this._toDoService.allTodos.pipe(takeUntil(this.$destroyed))
      .subscribe(todos => this.todos = todos);
  }

  public action($event : any) : void {
    if($event.delete !== undefined) {
      this._toDoService.makeDeletion($event);
      return;
    }
    this._toDoService.makeAction($event);
  }

  public setDescription($event : string) : void {
    this._toDoService.description = $event;
  }

  @HostListener('keydown', ['$event']) onKeyDown(e : any) {
    if((e.keyCode == 91 && e.keyCode == 13) || e.keyCode == 13) {
      this.saveToDo();
      this.description = '';
    }
  }

  public saveToDo() : void {
    this._toDoService.addNewPost();
  }

  public drop($event : CdkDragDrop<string[]>) : void {
    moveItemInArray(this.todos, $event.previousIndex, $event.currentIndex);
  }

  public ngOnDestroy() : void {
    this.$destroyed.next({});
    this.$destroyed.complete();
  }
}
