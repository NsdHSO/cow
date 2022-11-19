import {
  animate,
  style,
  transition,
  trigger
} from '@angular/animations';
import {
  Component,
  Input
} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {Product} from '../../product.model';
import {EditComponent} from '../edit/edit.component';

@Component({
  selector: 'lib-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  animations: [
    trigger('move', [
      transition(':enter', [
        style({transform: 'translateX(50%)'}),
        animate(
          200, style({
            transform: 'translateX(0)',
            animationTimingFunction: 'cubic-bezier(0.35, 0, 0.25, 0.5)'
          }))
      ]),
      transition(':leave', [
        style({transform: 'translateX(0)'}),
        animate(
          200, style({
            transform: 'translateX(-50%)',
            animationTimingFunction: 'cubic-bezier(0.35, 0, 0.25, 0.5)'
          }))
      ])
    ])
  ]
})
export class PostComponent {
  @Input() product = {} as Product;
  index : number = 0;

  constructor(public matDialog : MatDialog) {}

  public triggerArrow($event : { index : number }) : void {
    this.index = $event.index;
  }

  openDialog(data : any) : void {
    const refDialog = this.matDialog.open(EditComponent, {
      width: '250px',
      data: data
    });

    refDialog.afterClosed().subscribe(r => {
      console.log('Dialog closed')
    })
  }
}
