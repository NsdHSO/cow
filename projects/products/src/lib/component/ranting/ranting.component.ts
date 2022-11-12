import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'lib-ranting',
  templateUrl: './ranting.component.html',
  styleUrls: ['./ranting.component.scss']
})
export class RantingComponent {
  @Input()
  rantingProduct : number | undefined;

  public getColor(index : number) : any {
    if(this.rantingProduct) {
      debugger
      return (this.rantingProduct - index) >= index
        ? 'colored'
        : 'bg-color-red';
    }
  }
}
